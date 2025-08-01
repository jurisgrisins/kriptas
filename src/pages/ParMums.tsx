import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Award, Shield, Users } from "lucide-react";

const ParMums = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Par Kriptas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Mēs esam vadošie kriptovalūtu investīciju pārvaldības eksperti Baltijas reģionā.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Sazināties
            </Button>
            <Button variant="outline" size="lg">
              Mūsu Komanda
            </Button>
          </div>
        </section>

        {/* About */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            Mūsu Misija
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Mēs apvienojam tradicionālās investīciju principus ar modernāko blokķēdes tehnoloģiju, 
              lai nodrošinātu konsekventus, riska koriģētus ieguvumus digitālo aktīvu jomā.
            </p>
            <p>
              Mūsu mērķis ir padarīt kriptovalūtu investēšanu pieejamu un drošu ikvienam investoram, 
              neatkarīgi no viņa pieredzes līmeņa digitālo aktīvu jomā.
            </p>
          </div>
          
          <div className="mt-8 grid gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Regulējumu atbilstoša darbība</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Institucionālā aizgādība</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Pārredzama atskaišu sniegšana</span>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Mūsu Vērtības
          </h2>
          
          <div className="space-y-8">
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    Drošība un Uzticamība
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mūsu prioritāte ir klientu līdzekļu drošība un uzticamība, izmantojot 
                    jaunākās drošības tehnoloģijas un institucionālus risinājumus.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    Izcilība un Profesionalitāte
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nepārtraukti pilnveidojam savās zināšanās un prasmes, lai nodrošinātu 
                    augstākā līmeņa pakalpojumus un rezultātus.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    Klientu Orientācija
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Personalizēts serviss un pārredzama komunikācija nodrošina pilnīgu 
                    atbilstību jūsu investīciju mērķiem un vēlmēm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Mūsu Komanda
          </h2>
          
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  Jānis Bērziņš
                </h3>
                <p className="text-sm text-primary">Izpilddirektors</p>
              </div>
              <p className="text-muted-foreground text-sm">
                15 gadu pieredze investīciju pārvaldībā un fintech sektorā. 
                Iepriekš vadījis digitālo aktīvu stratēģiju Skandināvijas bankā.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  Anna Liepiņa
                </h3>
                <p className="text-sm text-primary">Tehnoloģiju direktore</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Blockchain tehnoloģiju eksperte ar doktora grādu datorzinātnēs. 
                Iepriekšējā pieredze Goldman Sachs digitālo aktīvu nodaļā.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Sazināties ar Mums
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Rīga</h4>
              <p className="text-sm text-muted-foreground mb-1">Finanšu Centrs</p>
              <p className="text-sm text-muted-foreground">+371 2000 0000</p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Londona</h4>
              <p className="text-sm text-muted-foreground mb-1">Canary Wharf</p>
              <p className="text-sm text-muted-foreground">+44 20 7946 0958</p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Singapūra</h4>
              <p className="text-sm text-muted-foreground mb-1">Marina Bay</p>
              <p className="text-sm text-muted-foreground">+65 6234 5678</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="default" size="lg">
              Pieteikt Tikšanos
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">
            © 2024 Kriptas Investīciju Pārvaldība. Visas tiesības aizsargātas.
          </div>
        </footer>
      </div>
    </BjorkLayout>
  );
};

export default ParMums;