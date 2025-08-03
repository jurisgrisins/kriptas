import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Building, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Uznemumiem = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Korporatīvie Risinājumi
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Institucionālie kriptovalūtu investīciju pārvaldības pakalpojumi uzņēmumiem un organizācijām.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Sazināties
            </Button>
            <Button variant="outline" size="lg">
              Lejupielādēt Prospektu
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Mūsu Pakalpojumi
          </h2>
          
          <div className="space-y-8">
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Korporatīvo Portfeļu Pārvaldība
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Profesionāla kriptovalūtu portfeļu pārvaldība uzņēmumiem ar individuālu risku profilu un investīciju mērķiem.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-14">
                <li>• Individuāls risku profils</li>
                <li>• 24/7 portfeļa monitorings</li>
                <li>• Regulāras atskaites</li>
                <li>• Institucionālā aizgādība</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Investīciju Konsultācijas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ekspertu konsultācijas digitālo aktīvu jomā, tirgus analīze un stratēģisko lēmumu atbalsts.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-14">
                <li>• Tirgus analīzes un prognozes</li>
                <li>• Stratēģijas izstrāde</li>
                <li>• Regulējumu analīze</li>
                <li>• Due diligence</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Darbinieku Apmācības
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Korporatīvās apmācības programmas darbinieku izglītošanai kriptovalūtu un blokķēdes tehnoloģiju jomā.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-14">
                <li>• Individualizētas programmas</li>
                <li>• Sertifikācijas kursi</li>
                <li>• Praktiskas darbnīcas</li>
                <li>• Nepārtraukts atbalsts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Mūsu Klienti
          </h2>
          
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  Baltijas Banka
                </h3>
                <p className="text-sm text-primary">Finanšu sektors</p>
              </div>
              <p className="text-muted-foreground text-sm">
                "Kriptas palīdzēja mums droši ienākt kriptovalūtu tirgū ar profesionālu 
                risku pārvaldību un regulējumu atbilstību."
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  TechCorp
                </h3>
                <p className="text-sm text-primary">Tehnoloģiju uzņēmums</p>
              </div>
              <p className="text-muted-foreground text-sm">
                "Mūsu darbinieki iegūst vērtīgas zināšanas par blokķēdes tehnoloģijām, 
                kas palīdz mums būt inovāciju priekšgalā."
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Gatavi Sadarbībai?
            </h2>
            <p className="text-muted-foreground mb-6">
              Pievienojieties institucionālajiem investoriem, kas uzticas mums 
              savu digitālo aktīvu portfeļu pārvaldībā.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Pieteikt Konsultāciju
              </Button>
              <Button variant="outline" size="lg">
                Uzzināt Vairāk
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

export default Uznemumiem;