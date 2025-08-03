import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ParMums = () => {
  return (
    <BjorkLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Par Kriptas
          </h1>
          <p className="text-xl text-foreground leading-relaxed mb-8">
            Kriptas ir projekts, ko ir izveidojuši vadošie darbinieki no uzņēmuma Capitalia, kas ir finanšu un investīciju nozares celmlauzis un Baltijas valstīs. Capitalia bija pirmā kompānija Baltijas valstīs, kas 2007. gadā sāka finansēt uzņēmumus ārpus banku sektora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
  href="mailto:investicijas@kriptas.com"
  className="inline-block"
>
  <Button variant="default" size="lg" asChild>
    Sazināties
  </Button>
</a>

          
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Mūsu mērķis ar šo projektu
          </h2>
          
          <div className="space-y-8">
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    Ievads kriptovalūtās jebkuram
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                 Iedot rīkus, lai padarītu kriptovalūtu investēšanu pieejamu un drošu ikvienam investoram, neatkarīgi no viņa pieredzes līmeņa digitālo aktīvu jomā.
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
                    Turības veicināšana
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Palīdzēt Latvijas investoriem un uzņēmumiem veicināt savu turību, izmantojot kriptovalūtas kā ienesīgu ieguldījumu diversifikācijas avotu.
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
                    Nozares veicināšanas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mēs vēlamies veicināt kriptovalūtu risinājumu ieviešanu Latvijā un ar saviem materiāliem vēlamies
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
          <div className="mb-6">
            <div className="flex items-center w-full">
              <div className="flex gap-4">
                <Link
                  to="/privatumas-politika"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privātuma politika
                </Link>
                <Link
                  to="/lietosanas-noteikumi"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lietošanas noteikumi
                </Link>
              </div>
              <div className="text-sm text-muted-foreground ml-auto">
                © Kopš 2025. Visas tiesības aizsargātas.
              </div>
            </div>
            <div className="my-4"></div>
            
            <div className="text-xs text-muted-foreground leading-relaxed mb-4 p-4 bg-muted/30 rounded-lg">
              <strong className="text-foreground">Saistību atruna:</strong> Pagātnes rezultāti nenozīmē, ka nākotnē rezultāti būs līdzīgi. 
              Kriptas nodrošina ieguldīšanas apmācības tikai informatīviem nolūkiem un nepiedāvā ieguldījumu konsultācijas vai ieguldījumu pakalpojumus. 
              Vienmēr ieguldiet, izmantojot tikai licencētu finanšu iestāžu vai uzticamu platformu pakalpojumus. 
              Pat sekojot labākajai ieguldīšanas praksei, ieguldīšana kriptovalūtās un citos finanšu tirgos saistās ar zaudējumu risku. 
              Pirms investēšanas rūpīgi izvērtējiet savus personīgos apstākļus un riska toleranci. 
              Visi lēmumi par ieguldījumiem vienmēr paliek jūsu personīgajā atbildībā.
            </div>
          </div>
        </footer>
      </div>
    </BjorkLayout>
  );
};

export default ParMums;
