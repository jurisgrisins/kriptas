import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const SubscriptionSchema = z.object({
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
});

type SubscriptionRequest = z.infer<typeof SubscriptionSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate input data
    const rawData = await req.json();
    const { email } = SubscriptionSchema.parse(rawData);
    console.log("Subscription email validated:", email);

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Kriptas <noreply@kriptas.com>",
      to: ["juris@capitalia.com"],
      subject: "Jauns fans kursiem",
      html: `
        <h2>Jauns kursa abonents</h2>
        <p>Jauns lietotājs ir pieteicies saņemt paziņojumus par kursu:</p>
        <p><strong>E-pasta adrese:</strong> ${email}</p>
        <hr>
        <p><small>Nosūtīts no Kriptas vietnes abonēšanas formas</small></p>
      `,
    });

    console.log("Subscription email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Subscription submitted successfully",
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
    console.error("Error in send-subscription-email function:", error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email address', 
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
    
    // Generic error message
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
