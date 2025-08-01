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
            <p className="text-primary text-sm font-medium mb-4">Sveiki tur!</p>
            <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
              Mēs esam Kriptas, un mēs specializējamies 
              institucionālajā kriptovalūtu investīciju pārvaldībā.
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Uzzināt Vairāk
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
              Mēs apvienojam tradicionālās investīciju principus ar modernāko blokķēdes tehnoloģiju, 
              lai nodrošinātu konsekventus, riska koriģētus ieguvumus digitālo aktīvu jomā.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mūsu komanda ir izveidojusi institucionāla līmeņa risinājumus, kas atbilst 
              augstākajiem drošības un regulējumu standartiem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pievienojieties vairāk nekā 200 institucionālajiem klientiem, kas uzticas 
              mums savu digitālo aktīvu portfeļu pārvaldībā.
            </p>
          </div>
        </section>

        {/* Services Preview */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            Mūsu Pakalpojumi
          </h2>
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Portfeļu Pārvaldība
              </h3>
              <p className="text-muted-foreground">
                Profesionāla kriptovalūtu portfeļu pārvaldība ar individuālu risku profilu.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Investīciju Konsultācijas
              </h3>
              <p className="text-muted-foreground">
                Ekspertu konsultācijas digitālo aktīvu jomā un stratēģisko lēmumu atbalsts.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Izglītība un Apmācības
              </h3>
              <p className="text-muted-foreground">
                Korporatīvās apmācības programmas darbinieku izglītošanai kriptovalūtu jomā.
              </p>
            </div>
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

export default Index;