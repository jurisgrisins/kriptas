import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-crypto.jpg";
import anna from "@/assets/anna-kalnina.png";
import maris from "@/assets/maris-zarins.png";
import laura from "@/assets/laura-berzina.png";


const Index = () => {
  return (
    <BjorkLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="mb-8">
            <p className="text-primary text-lg font-medium mb-4">Sveiks!</p>
            <h1 className="text-3xl md:text-5xl font-medium text-foreground leading-loose mb-8">
              Mēs piedāvājam profesionālas apmācības kā veiksmīgi uzsākt ieguldījumus kriptovalūtās
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/kursi">
  <Button variant="default" size="lg">
    Apskatīt kursu
  </Button>
</Link>
            <Link to="/par-mums">
  <Button variant="outline" size="lg">
    Par mums
  </Button>
</Link>
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
, kas ir finanšu un investīciju nozares celmlauzis un Baltijas valstīs. 
              Capitalia bija pirmā kompānija Baltijas valstīs, kas 2007. gadā sāka finansēt uzņēmumus ārpus banku sektora. 
              Tagad Capitalia pārvalda pirmo licensēto uzņēmumu kopfinansēšanas platformu Latvijā, apkalpojot vairāk kā 5,000 kompānijas un investorus visā Eiropā.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Sagatavotie materiāli ir balstīti uz mūsu investīciju speciālistu pašu pieredzi un mācībām, apgūstot kriptvalūtu investīciju pasaules nianses. 
              Kopš 2025. gada Capitalia ir viena no pirmajām kompānijām Latvijā, kas veido un uztur savas kriptovalūtu rezerves.
            </p>
          </div>
        </section>

        {/* Services Preview */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-8">
            Ko mēs piedāvājam
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
         <Link to="/kursi" className="block group">
  <div className="relative group cursor-pointer hover:shadow-lg transition">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Kurss kā ieguldīt kriptovalūtās
                </h3>
                <p className="text-foreground leading-relaxed">
                  Vienkāršs, praktisks un Latvijas apstākļiem īpaši pielāgots apmācību kurss par ieguldījumiem kriptovalūtās
                </p>
              </div>
            </div>
           </Link>

              <Link to="/uznemumiem" className="block group">
  <div className="relative group cursor-pointer hover:shadow-lg transition">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Konsultācijas uzņēmumiem
                </h3>
                <p className="text-foreground leading-relaxed">
                  Apmācības uzņēmumiem par to, kā sākt izmantot kriptovalūtas norēķiniem vai uzkrājumiem
                </p>
              </div>
            </div>
                </Link>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-6">
            Ko saka mūsu klienti
          </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Lai gan mūsu kurss vēl nav publiski pieejams, esam piedāvājuši mūsu materiālus jau pirmajiem testa lietotājiem. Lūk ko viņi par to saka: 
            </p>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
         <Avatar className="h-[72px] w-[72px]">
  <img
    src={anna}
    alt="Anna Kalniņa"
    className="h-[72px] w-[72px] rounded-full object-cover"
  />
  <AvatarFallback className="bg-primary/10 text-primary font-medium">
    AK
  </AvatarFallback>
</Avatar>

                  <div className="flex-1">
                    <p className="text-foreground mb-4">
                      "Ļoti profesionāla pieeja – sapratu gan riskus, gan iespējas. Beidzot jūtos droši par saviem pirmajiem kripto ieguldījumiem."
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Anna Kalniņa</p>
                      <p className="text-sm text-muted-foreground">IT konsultante</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                     <Avatar className="h-[72px] w-[72px]">
  <img
    src={maris}
    alt="Māris Zariņš"
    className="h-[72px] w-[72px] rounded-full object-cover"
  />
  <AvatarFallback className="bg-primary/10 text-primary font-medium">
    AK
  </AvatarFallback>
</Avatar>
                  <div className="flex-1">
                    <p className="text-foreground mb-4">
                      "Capitalia pieredze finanšu jomā ir ļoti jūtama. Kurss ir profesionāls un sniedz praktiskas zināšanas par investīcijām."
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Māris Zariņš</p>
                      <p className="text-sm text-muted-foreground">Uzņēmējs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <Avatar className="h-[72px] w-[72px]">
  <img
    src={laura}
    alt="Laura Bērziņa"
    className="h-[72px] w-[72px] rounded-full object-cover"
  />
  <AvatarFallback className="bg-primary/10 text-primary font-medium">
    AK
  </AvatarFallback>
</Avatar>
                  <div className="flex-1">
                    <p className="text-foreground mb-4">
                      "Beidzot atradu kursu, kas skaidro kriptovalūtas vienkāršā valodā un Latvijas kontekstā. Iesaku!"
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Laura Bērziņa</p>
                      <p className="text-sm text-muted-foreground">Grāmatvede</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24">
          <div className="border border-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Rīkojies jau tagad!
            </h2>
            <p className="text-foreground mb-6">
              Iepazīsties ar bezmaksas ievadlekcijas materiālu un piesakies paziņojuma saņemšanai, tiklīdz kurss kļūs publiski pieejams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Apskatīt kursu
              </Button>
              <Button variant="outline" size="lg">
                Pieteikties konsultācijai
              </Button>
            </div>
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

export default Index;
