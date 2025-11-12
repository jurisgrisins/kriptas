import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const SubscriptionBox = () => {
  const [email, setEmail] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPrivacy || !email) {
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-subscription-email', {
        body: { email }
      });

      if (error) throw error;

      toast.success("Paldies par reģistrāciju!", {
        description: "Tu saņemsi paziņojumu, kad būs pieejama jauna kursa sadaļa."
      });
      
      setEmail("");
      setAgreedToPrivacy(false);
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Kļūda", {
        description: "Neizdevās nosūtīt pieteikumu. Lūdzu, mēģini vēlreiz."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-subscription" className="mb-24">
      <div className="border border-border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Uzzini pirmais!
        </h2>
        <p className="text-muted-foreground mb-6">
          Atstāj savu e-pastu, lai saņemtu paziņojumu, kad tiks publicēts nākošā apmācību kursa sadaļa
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2 mb-4">
            <Input 
              type="email" 
              placeholder="Tava e-pasta adrese"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              variant="default" 
              size="lg"
              type="submit"
              disabled={!agreedToPrivacy || isSubmitting}
            >
              {isSubmitting ? "Nosūta..." : "Pieteikties"}
            </Button>
          </div>
          <div className="flex items-start gap-2 justify-center">
            <Checkbox 
              id="privacy-checkbox"
              checked={agreedToPrivacy}
              onCheckedChange={(checked) => setAgreedToPrivacy(checked === true)}
            />
            <Label 
              htmlFor="privacy-checkbox" 
              className="text-xs text-muted-foreground cursor-pointer text-left"
            >
              Dati tiek apstrādāti saskaņā ar{" "}
              <Link 
                to="/privatumas-politika" 
                className="underline hover:text-foreground"
              >
                Privātuma politiku
              </Link>
            </Label>
          </div>
        </form>
      </div>
    </section>
  );
};
