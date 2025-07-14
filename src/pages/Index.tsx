import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/28e8744b-0d21-4285-b276-6ccbab820726.png" alt="Kriptia" className="w-8 h-8" />
              <div className="text-2xl font-bold text-foreground">Kriptia</div>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground leading-none">
              Precision in Digital Assets
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Institutional-grade cryptocurrency investment management for the modern era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                About Me
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
              Built for the Future
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                We combine traditional investment principles with cutting-edge blockchain technology 
                to deliver consistent, risk-adjusted returns in the digital asset space.
              </p>
              <div className="space-y-4">
                <div className="text-foreground">• Regulatory compliant</div>
                <div className="text-foreground">• Institutional custody</div>
                <div className="text-foreground">• Transparent reporting</div>
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
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three pillars of excellence in digital asset management
            </p>
            
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-foreground mb-3">Security First</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Multi-signature wallets, cold storage, and institutional-grade security protocols 
                      protect your digital assets.
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
                    <h3 className="text-2xl font-medium text-foreground mb-3">Active Management</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Quantitative models and market analysis drive our investment decisions 
                      across diverse crypto strategies.
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
                    <h3 className="text-2xl font-medium text-foreground mb-3">Client Focus</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Personalized service and transparent communication ensure alignment 
                      with your investment objectives.
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
              Ready to Begin?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Join institutional investors and high-net-worth individuals who trust us 
              with their digital asset portfolios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Prospectus
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">New York</h4>
                <p>Financial District</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">London</h4>
                <p>Canary Wharf</p>
                <p>+44 20 7946 0958</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Singapore</h4>
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
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/28e8744b-0d21-4285-b276-6ccbab820726.png" alt="Kriptia" className="w-6 h-6" />
              <div className="text-xl font-bold text-foreground">Kriptia</div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Kriptia Investment Management. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
