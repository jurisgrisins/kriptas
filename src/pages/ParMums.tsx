import { Award, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ParMums = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/666b6c8f-8eb5-45e5-ba50-b0195a238dcf.png" alt="Kriptia" className="h-16" />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/kursi" className="text-foreground hover:text-primary transition-colors font-medium text-xl">
                Kursi
              </Link>
              <Link to="/uznemumiem" className="text-foreground hover:text-primary transition-colors font-medium text-xl">
                Uzņēmumiem
              </Link>
              <Link to="/par-mums" className="text-primary font-medium text-xl">
                Par mums
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground leading-none">
              Par Kriptia
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Mēs esam vadošie kriptovalūtu investīciju pārvaldības eksperti Baltijas reģionā.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Sazināties
              </Button>
              <Button variant="outline" size="lg">
                Mūsu Komanda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Mūsu Misija
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mēs apvienojam tradicionālās investīciju principus ar modernāko blokķēdes tehnoloģiju, 
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

      {/* Values Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Mūsu Vērtības
            </h2>
            
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Drošība un Uzticamība</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Mūsu prioritāte ir klientu līdzekļu drošība un uzticamība, izmantojot 
                      jaunākās drošības tehnoloģijas un institucionālus risinājumus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Izcilība un Profesionalitāte</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Nepārtraukti pilnveidojam savās zināšanās un prasmes, lai nodrošinātu 
                      augstākā līmeņa pakalpojumus un rezultātus.
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
                    <h3 className="text-2xl font-medium text-foreground mb-3">Klientu Orientācija</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Personalizēts serviss un pārredzama komunikācija nodrošina pilnīgu 
                      atbilstību jūsu investīciju mērķiem un vēlmēm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
              Sazināties ar Mums
            </h2>
            
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
              <img src="/lovable-uploads/666b6c8f-8eb5-45e5-ba50-b0195a238dcf.png" alt="Kriptia" className="h-6" />
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

export default ParMums;