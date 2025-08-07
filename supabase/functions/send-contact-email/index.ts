import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();
    console.log("Received form data:", formData);

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

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Kriptas <onboarding@resend.dev>",
      to: ["investicijas@kriptas.com"],
      subject: "Jauna tikšanās pieprasījums",
      html: `
        <h2>Jauns tikšanās pieprasījums</h2>
        <p><strong>Vārds:</strong> ${formData.name}</p>
        <p><strong>E-pasts:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Tālrunis:</strong> ${formData.phone}</p>` : ''}
        ${formData.company ? `<p><strong>Uzņēmums:</strong> ${formData.company}</p>` : ''}
        ${formData.message ? `<p><strong>Ziņojums:</strong></p><p>${formData.message}</p>` : ''}
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
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
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