import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { ContactFormButton } from "@/components/ContactFormButton";
import { Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import mes from "@/assets/mes-background.jpg";

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
          Kriptas ir projekts, ko ir izveidojuši vadošie darbinieki no uzņēmuma Capitalia, kas ir finanšu un investīciju nozares celmlauzis Baltijas valstīs. Capitalia bija pirmā kompānija Baltijas valstīs, kas 2007. gadā sāka finansēt uzņēmumus ārpus banku sektora. Kopš 2025. gada Capitalia ir viena no pirmajām kompānijām Latvijā, kas veido un uztur savas kriptovalūtu rezerves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <ContactFormButton size="lg" />


          
          </div>

            <img
  src={mes}
  alt="Kursu ilustrācija"
  className="w-full max-h-64 object-cover rounded-lg mb-8"
/>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-8">
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
                    Piejams jebkuram
                  </h3>
                  <p className="text-foreground leading-relaxed">
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
                  <p className="text-foreground leading-relaxed">
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
                    Nozares atbalsts
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Mēs vēlamies veicināt kriptovalūtu risinājumu ieviešanu Latvijā un ar saviem materiāliem vēlamies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-8">
            Mūsu Komanda
          </h2>
          
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  Juris Grišins
                </h3>
                <p className="text-sm text-primary">Izpilddirektors</p>
              </div>
              <p className="text-muted-foreground text-sm">
                20 gadu pieredze korporatīvo darījumu konsultācijās, investīciju pārvaldībā un finansēs. Investīciju un finanšu uzņēmuma Capitalia vadītājs. 
              </p>
            </div>
            
            
          </div>
        </section>

        {/* Contact */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-8">
            Sazināties
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-white rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Rīga</h4>
              <p className="text-sm text-muted-foreground mb-1">Stabu 20-1</p>
               <p className="text-sm text-muted-foreground mb-1">LV-1011</p>
              <p className="text-sm text-muted-foreground">+371 2880 0880</p>
            </div>
           <div className="border border-white rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Viļņa</h4>
              <p className="text-sm text-muted-foreground mb-1">Smolensko 10 B</p>
               <p className="text-sm text-muted-foreground mb-1">LT-03201</p>
              <p className="text-sm text-muted-foreground">+370 6168 0880</p>
            </div>
             <div className="border border-white rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-2">Tallina</h4>
              <p className="text-sm text-muted-foreground mb-1">Pärnu mnt. 137</p>
               <p className="text-sm text-muted-foreground mb-1">EE11314</p>
              <p className="text-sm text-muted-foreground">+372 5864 0880</p>
            </div>
          </div>
          
         
            

<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactFormButton size="lg" />
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
