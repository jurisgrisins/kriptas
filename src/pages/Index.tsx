import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";
import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";
import programma from "@/assets/kursa-programma.pdf";

const Index = () => {
  return (
    <BjorkLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="mb-8">
            <p className="text-primary text-lg font-medium mb-4">
              Sveiks!
            </p>
            <h1 className="text-3xl md:text-5xl font-medium text-foreground leading-loose mb-8">
              Mēs piedāvājam bezmaksas kursu par to kā veiksmīgi uzsākt ieguldījumus kriptovalūtās
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/kursi">
              <Button variant="default" size="lg">
                Sākt kursu
              </Button>
            </Link>
            <a href={programma} download>
              <Button variant="outline" size="lg">
                Lejupielādēt kursa saturu
              </Button>
            </a>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src={heroImage} 
              alt="Kriptovalūtu investīcijas"
              className="w-full h-64 object-cover object-bottom"
            />
          </div>
        </section>
        
        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-6">
            Par Kriptas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-4">
              Kriptas ir projekts, ko ir izveidojuši vadošie darbinieki no uzņēmuma <a
                href="http://www.capitalia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Capitalia
              </a>
            </p>
          </div>
        </section>
      </div>
    </BjorkLayout>
  );
};

export default Index;
