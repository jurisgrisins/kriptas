import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormButtonProps {
  buttonText?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export const ContactFormButton = ({
  buttonText = "Sazināties",
  size = "default",
  variant = "default",
  className,
}: ContactFormButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    vards: "",
    uzvards: "",
    epasts: "",
    zinojums: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.vards || !formData.uzvards || !formData.epasts) {
      toast({
        title: "Kļūda",
        description: "Lūdzu aizpildiet Vārds, Uzvārds un E-pasts laukus",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.epasts)) {
      toast({
        title: "Kļūda",
        description: "Lūdzu ievadiet derīgu e-pasta adresi",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: `${formData.vards} ${formData.uzvards}`,
          email: formData.epasts,
          message: formData.zinojums || undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Paldies!",
        description:
          "Jūsu ziņa ir nosūtīta. Mēs sazināsimies ar jums tuvākajā laikā.",
      });

      setFormData({ vards: "", uzvards: "", epasts: "", zinojums: "" });
      setIsOpen(false);
    } catch (err) {
      console.error("Error sending contact form:", err);
      toast({
        title: "Kļūda",
        description: "Radās kļūda nosūtot formu. Lūdzu, mēģiniet vēlreiz.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Sazināties</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vards">Vārds *</Label>
              <Input
                id="vards"
                name="vards"
                value={formData.vards}
                onChange={handleChange}
                placeholder="Jūsu vārds"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="uzvards">Uzvārds *</Label>
              <Input
                id="uzvards"
                name="uzvards"
                value={formData.uzvards}
                onChange={handleChange}
                placeholder="Jūsu uzvārds"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="epasts">E-pasts *</Label>
            <Input
              id="epasts"
              name="epasts"
              type="email"
              value={formData.epasts}
              onChange={handleChange}
              placeholder="jusu@epasts.lv"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zinojums">Ziņojums</Label>
            <Textarea
              id="zinojums"
              name="zinojums"
              value={formData.zinojums}
              onChange={handleChange}
              placeholder="Jūsu jautājums vai informācija..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Atcelt
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? "Nosūta..." : "Nosūtīt"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
