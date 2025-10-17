import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";
import programma from "@/assets/kursa-programma.pdf";


const Index = () => {
  return (
    <BjorkLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="mb-8">
            <p className="text-primary text-lg font-medium mb-4">Sveiks!</p>
            <h1 className="text-3xl md:text-5xl font-medium text-foreground leading-loose mb-8">
              Mēs piedāvājam bezmaksas kursu par to kā veiksmīgi uzsākt ieguldījumus kriptovalūtās
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/kursi">
              <Button variant="default" size="lg">
                Sākt kursu
              </Button>
            </Link>
            <a href={programma} download>
              <Button variant="outline" size="lg">
                Lejupielādēt kursa saturu
              </Button>
            </a>
            </div>
          
          
          <div className="rounded-lg overflow-hidden">
            <img 
  src={heroImage} 
  alt="Kriptovalūtu investīcijas"
  className="w-full h-64 object-cover object-bottom"
/>

          </div>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-6">
            Par Kriptas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-4">
              Kriptas ir projekts, ko ir izveidojuši vadošie darbinieki no uzņēmuma <a
  href="http://www.capitalia.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800"
>
  Capitalia
</a>
, kas ir finanšu un investīciju nozares celmlauzis Baltijas valstīs. 
              Capitalia bija pirmā kompānija Baltijas valstīs, kas 2007. gadā sāka finansēt uzņēmumus ārpus banku sektora. 
              Tagad Capitalia pārvalda pirmo licensēto uzņēmumu kopfinansēšanas platformu Latvijā, apkalpojot vairāk kā 5,000 kompānijas un investorus visā Eiropā.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Sagatavotie materiāli ir balstīti uz mūsu investīciju speciālistu pašu pieredzi un mācībām, apgūstot kriptvalūtu investīciju pasaules nianses. 
              Kopš 2025. gada Capitalia ir viena no pirmajām kompānijām Latvijā, kas veido un uztur savas kriptovalūtu rezerves.
            </p>
          </div>
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
                    Mēs vēlamies veicināt kriptovalūtu risinājumu ieviešanu Latvijā un ar saviem materiāliem veicināt to apguvi gan privātpersonu, gan uzņēmumu lokā.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        {/* Call to Action */}
        <section className="mb-24">
          <div className="border border-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Rīkojies jau tagad!
            </h2>
            <p className="text-foreground mb-6">
              Iepazīsties ar  ievadlekcijas materiālu un piesakies paziņojuma saņemšanai, tiklīdz kursa nākošās nodaļas kļūs publiski pieejamas. Kurss ir pieejams bez maksas visiem Capitalia klientiem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Sākt kursu
              </Button>
                          </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </BjorkLayout>
  );
};

export default Index;
