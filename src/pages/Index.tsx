import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarNav } from "@/components/ui/sidebar-nav";

const Index = () => {
  const sidebarItems = [
    { title: "Sākums", section: "hero" },
    { title: "Par Mums", section: "about" },
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
              <Link to="/uznemumiem" className="text-foreground hover:text-primary transition-colors font-medium text-xl">
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
              Precizitāte Digitālajos Aktīvos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Institucionāla līmeņa kriptovalūtu investīciju pārvaldība mūsdienu vajadzībām.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Sazināties
              </Button>
              <Button variant="outline" size="lg">
                Par Mums
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Veidots Nākotnei
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mēs apvienojam tradicionālās investīciju principus ar progresīvāko blokķēdes tehnoloģiju, 
                lai nodrošinātu konsekventus, riska koriģētus ieguvumus digitālo aktīvu jomā.
              </p>
              <div className="space-y-4">
                <div className="text-foreground">• Regulējumu atbilstoša darbība</div>
                <div className="text-foreground">• Institucionālā aizgādība</div>
                <div className="text-foreground">• Pārredzama atskaišu sniegšana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Mūsu Pieeja
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trīs izcilības pīlāri digitālo aktīvu pārvaldībā
            </p>
            
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Drošība Pirmajā Vietā</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Daudzpakāpju parakstīšanas maki, aukstā glabāšana un institucionāla līmeņa drošības protokoli 
                      aizsargā jūsu digitālos aktīvus.
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
                    <h3 className="text-2xl font-medium text-foreground mb-3">Aktīvā Pārvaldība</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Kvantitatīvie modeļi un tirgus analīze virza mūsu investīciju lēmumus 
                      dažādās kriptovalūtu stratēģijās.
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
                    <h3 className="text-2xl font-medium text-foreground mb-3">Klientu Fokuss</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Personalizēts serviss un pārredzama komunikācija nodrošina atbilstību 
                      jūsu investīciju mērķiem.
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
              Gatavi Sākt?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Pievienojieties institucionālajiem investoriem un augstu ienākumu indivīdiem, kas uzticas mums 
              savu digitālo aktīvu portfeļu pārvaldībā.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Pieteikt Konsultāciju
              </Button>
              <Button variant="outline" size="lg">
                Lejupielādēt Prospektu
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Rīga</h4>
                <p>Finanšu Centrs</p>
                <p>+371 2000 0000</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Londona</h4>
                <p>Canary Wharf</p>
                <p>+44 20 7946 0958</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Singapūra</h4>
                <p>Marina Bay</p>
                <p>+65 6234 5678</p>
              </div>
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

export default Index;
