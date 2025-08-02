import { Button } from "@/components/ui/button";
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
            <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Mēs piedāvājam informāciju un 
              apmācības par to, kā veiksmīgi uzsākt ieguldījumus kriptovalūtās
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
