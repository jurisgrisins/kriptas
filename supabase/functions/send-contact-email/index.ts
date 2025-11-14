import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Rate limiter to prevent spam attacks
const rateLimiter = new Map<string, { count: number; resetTime: number }>();

// Input validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone number must be less than 20 characters').optional(),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  message: z.string().trim().max(1000, 'Message must be less than 1000 characters').optional(),
});

// HTML escape function to prevent XSS in email clients
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

type ContactFormRequest = z.infer<typeof ContactSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting: Track requests by IP address
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const limit = rateLimiter.get(ip) || { count: 0, resetTime: now + 3600000 }; // 1 hour window

    // Reset counter if time window has passed
    if (now > limit.resetTime) {
      limit.count = 0;
      limit.resetTime = now + 3600000;
    }

    // Check rate limit (5 submissions per hour per IP)
    if (limit.count >= 5) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Rate limit exceeded. Please try again later.' 
        }), 
        { 
          status: 429, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    // Increment rate limit counter
    limit.count++;
    rateLimiter.set(ip, limit);

    // Validate input data with zod schema
    const rawData = await req.json();
    const formData = ContactSchema.parse(rawData);
    console.log("Form data validated successfully");

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save form submission to database
    const { data, error: dbError } = await supabase
      .from('form_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message || null,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Form submission saved to database successfully");

    // Send email notification with HTML-escaped content to prevent XSS
    const emailResponse = await resend.emails.send({
      from: "Kriptas <noreply@kriptas.com>",
      to: ["investicijas@kriptas.com"],
      subject: "Jauna tikšanās pieprasījums",
      html: `
        <h2>Jauns tikšanās pieprasījums</h2>
        <p><strong>Vārds:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>E-pasts:</strong> ${escapeHtml(formData.email)}</p>
        ${formData.phone ? `<p><strong>Tālrunis:</strong> ${escapeHtml(formData.phone)}</p>` : ''}
        ${formData.company ? `<p><strong>Uzņēmums:</strong> ${escapeHtml(formData.company)}</p>` : ''}
        ${formData.message ? `<p><strong>Ziņojums:</strong></p><p>${escapeHtml(formData.message)}</p>` : ''}
        <hr>
        <p><small>Nosūtīts no Kriptas vietnes kontaktforma</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully",
        emailId: emailResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    // Handle validation errors separately with user-friendly messages
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid form data', 
          details: error.errors.map(e => e.message).join(', ')
        }),
        {
          status: 400,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }
    
    // Generic error message for other errors (don't expose internal details)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An error occurred while processing your request. Please try again later.'
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);