import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, Users, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">AXIOM</div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <Button variant="minimal" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
        {/* Blue accent overlay */}
        <div className="absolute inset-0 bg-gradient-blue-accent" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 animate-fade-in">
            Precision in
            <br />
            <span className="font-medium text-primary">Digital Assets</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Institutional-grade cryptocurrency investment management for the modern era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" size="lg" className="shadow-blue">
              Start Investing
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="minimal" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-light"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                Built for the
                <span className="font-medium"> Future</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine traditional investment principles with cutting-edge blockchain technology 
                to deliver consistent, risk-adjusted returns in the digital asset space.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Regulatory compliant</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Institutional custody</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Transparent reporting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-blue-accent rounded-lg shadow-blue" />
              <div className="absolute inset-4 bg-primary/10 rounded-lg border border-primary/20" />
              <div className="absolute inset-8 bg-gradient-primary opacity-20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Our <span className="font-medium">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three pillars of excellence in digital asset management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-medium">Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Multi-signature wallets, cold storage, and institutional-grade security protocols 
                  protect your digital assets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-medium">Active Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Quantitative models and market analysis drive our investment decisions 
                  across diverse crypto strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-medium">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Personalized service and transparent communication ensure alignment 
                  with your investment objectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to <span className="font-medium">Begin?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join institutional investors and high-net-worth individuals who trust us 
            with their digital asset portfolios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="minimal" size="lg">
              Download Prospectus
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-primary mb-4 md:mb-0">AXIOM</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Axiom Investment Management. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
