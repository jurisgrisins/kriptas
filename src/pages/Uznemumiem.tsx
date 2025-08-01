import { Building, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SidebarNav } from "@/components/ui/sidebar-nav";

const Uznemumiem = () => {
  const sidebarItems = [
    { title: "Pārskats", section: "hero" },
    { title: "Pakalpojumi", section: "services" },
    { title: "Kontakti", section: "contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarNav items={sidebarItems} />
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/1c2fe3e0-5052-4a05-a92b-9dffe9ddb8ce.png" alt="Kriptas" className="h-16" />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/kursi" className="text-foreground hover:text-primary transition-colors font-medium text-xl">
                Kursi
              </Link>
              <Link to="/uznemumiem" className="text-primary font-medium text-xl">
                Uzņēmumiem
              </Link>
              <Link to="/par-mums" className="text-foreground hover:text-primary transition-colors font-medium text-xl">
                Par mums
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground leading-none">
              Korporatīvie Risinājumi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Institucionālie kriptovalūtu investīciju pārvaldības pakalpojumi uzņēmumiem un organizācijām.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Sazināties
              </Button>
              <Button variant="outline" size="lg">
                Lejupielādēt Prospektu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Mūsu Pakalpojumi
            </h2>
            
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Korporatīvo Portfeļu Pārvaldība</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Profesionāla kriptovalūtu portfeļu pārvaldība uzņēmumiem ar individuālu risku profilu un investīciju mērķiem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Investīciju Konsultācijas</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Ekspertu konsultācijas digitālo aktīvu jomā, tirgus analīze un stratēģisko lēmumu atbalsts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Darbinieku Apmācības</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Korporatīvās apmācības programmas darbinieku izglītošanai kriptovalūtu un blokķēdes tehnoloģiju jomā.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Gatavi Sadarbībai?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Pievienojieties institucionālajiem investoriem, kas uzticas mums savu digitālo aktīvu portfeļu pārvaldībā.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Pieteikt Konsultāciju
              </Button>
              <Button variant="outline" size="lg">
                Uzzināt Vairāk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/1c2fe3e0-5052-4a05-a92b-9dffe9ddb8ce.png" alt="Kriptas" className="h-6" />
            </Link>
            <div className="text-sm text-muted-foreground">
              © 2024 Kriptia Investīciju Pārvaldība. Visas tiesības aizsargātas.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Uznemumiem;