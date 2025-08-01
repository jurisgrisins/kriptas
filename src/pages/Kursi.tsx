import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";

const Kursi = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Kriptovalūtu Izglītības Kursi
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Apgūstiet kriptovalūtu un blokķēdes tehnoloģiju pamatus ar mūsu ekspertu vadītajiem kursiem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Pieteikties Kursam
            </Button>
            <Button variant="outline" size="lg">
              Lejupielādēt Programmu
            </Button>
          </div>
        </section>

        {/* Courses */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Pieejamie Kursi
          </h2>
          
          <div className="space-y-8">
            <article className="border border-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Kriptovalūtu Pamati
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Iesācēju līmenis • 4 nedēļas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-medium text-foreground">€299</p>
                  <p className="text-sm text-muted-foreground">par personu</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Iegūstiet pamatzināšanas par kriptovalūtām, blokķēdes tehnoloģiju un 
                digitālo aktīvu tirgu. Ideāls sākums jūsu ceļojumam digitālo aktīvu pasaulē.
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Bitcoin un Ethereum pamati</li>
                <li>• Blockchain tehnoloģijas principi</li>
                <li>• Drošība un glabāšana</li>
                <li>• Tirgus analīzes pamati</li>
              </ul>
              
              <Button variant="outline" size="sm">
                Uzzināt Vairāk
              </Button>
            </article>

            <article className="border border-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Investīciju Stratēģijas
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Vidējs līmenis • 6 nedēļas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-medium text-foreground">€599</p>
                  <p className="text-sm text-muted-foreground">par personu</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dziļāka iegremdēšanās kriptovalūtu investēšanā ar fokumu uz 
                risku pārvaldību un portfeļa optimizāciju.
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Portfeļa diversifikācija</li>
                <li>• Risku pārvaldības metodes</li>
                <li>• DeFi protokolu analīze</li>
                <li>• Tirdzniecības stratēģijas</li>
              </ul>
              
              <Button variant="outline" size="sm">
                Uzzināt Vairāk
              </Button>
            </article>

            <article className="border border-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Institucionālā Pārvaldība
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Augstākais līmenis • 8 nedēļas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-medium text-foreground">€1,299</p>
                  <p className="text-sm text-muted-foreground">par personu</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Profesionāla apmācība institucionāliem investoriem un 
                fondu pārvaldniekiem, kas vēlas iekļaut digitālos aktīvus savos portfeļos.
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>• Regulējumu prasības</li>
                <li>• Institucionālie rīki</li>
                <li>• ESG kritēriji</li>
                <li>• Atskaišu sniegšana</li>
              </ul>
              
              <Button variant="outline" size="sm">
                Uzzināt Vairāk
              </Button>
            </article>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Gatavi Uzsākt?
            </h2>
            <p className="text-muted-foreground mb-6">
              Pievienojieties vairāk nekā 1000 studentiem, kas jau ir apguvuši 
              kriptovalūtu investēšanas prasmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Pieteikties Tagad
              </Button>
              <Button variant="outline" size="lg">
                Konsultācija
              </Button>
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

export default Kursi;