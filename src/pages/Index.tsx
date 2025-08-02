import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BjorkLayout } from "@/components/BjorkLayout";
import heroImage from "@/assets/hero-crypto.jpg";

const Index = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="mb-8">
            <p className="text-primary text-sm font-medium mb-4">Sveiks!</p>
            <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
              Mēs piedāvājam apmācības par to, kā veiksmīgi uzsākt ieguldījumus kriptovalūtās
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Apskatīt kursu
            </Button>
            <Button variant="outline" size="lg">
              Par Mums
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={heroImage} 
              alt="Kriptovalūtu investīcijas" 
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            Par Kriptas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kriptas ir projekts, ko ir izveidojuši vadošie darbinieki no uzņēmuma Capitalia, kas ir finanšu un investīciju nozares celmlauzis un Baltijas valstīs. 
              Capitalia bija pirmā kompānija Baltijas valstīs, kas 2007. gadā sāka finansēt uzņēmumus ārpus banku sektora. 
              Tadad Capitalia pārvalda pirmo licensēto uzņēmumu kopfinansēšanas platformu Latvijā, apkalpojot vairāk kā 5,000 kompānijas un investorus visā Eiropā.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sagatavotie materiāli ir balstīti uz mūsu investīciju speciālistu pašu pieredzi un mācībām, apgūstot kriptvalūtu investīciju pasaules nianses. 
              Kopš 2025. gada Capitalia ir viena no pirmajām kompānijām Latvijā, kas veido un uztur savas kriptovalūtu rezerves.
            </p>
          </div>
        </section>

        {/* Services Preview */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            Ko mēs piedāvājam
          </h2>
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Kurss kā ieguldīt kriptovalūtās
              </h3>
              <p className="text-muted-foreground">
               Vienkāršs, praktisks un Latvijas apstākļiem pielāgots kurss par ieguldījumiem kriptovalītās
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Konsultācijas uzņēmumiem
              </h3>
              <p className="text-muted-foreground">
                Apmācības uzņēmumiem par to, kā sākt izmantot kriptovalūtas norēķiniem vai uzkrājumiem
              </p>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            Ko saka mūsu klienti
          </h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      "Kurss bija ļoti saprotams un praktisks. Tagad es droši ieguldīju kriptovalūtās un jau redzu pirmos pozitīvos rezultātus."
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Anna Kalniņa</p>
                      <p className="text-sm text-muted-foreground">IT speciāliste</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      MZ
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4">
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
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      LB
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      "Beidzot atradu kursu, kas skaidro kriptovalūtas vienkāršā valodā un Latvijas kontekstā. Iesaku visiem!"
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

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">
            © Kopš 2025. Visas tiesības aizsargātas.
          </div>
        </footer>
      </div>
    </BjorkLayout>
  );
};

export default Index;
