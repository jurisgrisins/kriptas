import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactFormButton } from "@/components/ContactFormButton";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface BjorkLayoutProps {
  children: React.ReactNode;
}

const kursiSubItems = [
  { title: "Kriptovalūtu kā investīciju evolūcija", section: "evolucija" },
  { title: "Bitcoin lieliskai diversifikācijai", section: "diversifikacija" },
  { title: "Inflācijas aizsardzības aspekts", section: "inflacija" },
  { title: "Likviditāte 24/7", section: "likviditate" },
  { title: "Pilna kontrole pār ieguldījumu", section: "kontrole" },
  { title: "Digitālās dividendes", section: "dividendes" },
  { title: "Nepārspējama vēsturiskā atdeve", section: "atdeves" },
  { title: "Cenas svārstības", section: "cenas" },
  { title: "Kas nosaka kriptovalūtu vērtību", section: "vertiba" },
  { title: "Ieguldījumu riski", section: "riski" },
  { title: "Turpmākā kursa saturs", section: "saturs" },
];

export const BjorkLayout = ({ children }: BjorkLayoutProps) => {
  const location = useLocation();
  const [kursiExpanded, setKursiExpanded] = useState(location.pathname === '/kursi');
  
  const isActive = (path: string) => location.pathname === path;
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleKursiClick = () => {
    if (location.pathname === '/kursi') {
      setKursiExpanded(!kursiExpanded);
    } else {
      setKursiExpanded(true);
    }
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Sticky Sidebar */}
      <aside className="w-[448px] bg-background sticky top-0 h-screen">
        <div className="p-8 h-full flex flex-col">
          {/* Logo */}
          <Link to="/" className="block mb-12">
            <img 
              src="/lovable-uploads/471898ba-f7bb-40f1-a502-2c4d22b311c6.png" 
              alt="Kriptas" 
              className="h-8"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/" 
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Ievads
                </Link>
              </li>
              <li>
                <div>
                  <Link 
                    to="/kursi"
                    onClick={handleKursiClick}
                    className={`flex items-center justify-between py-2 text-lg font-medium transition-colors ${
                      isActive('/kursi') 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>Kapēc ieguldīt kriptovalūtās</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        kursiExpanded && isActive('/kursi') ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  
                  {kursiExpanded && isActive('/kursi') && (
                    <ul className="ml-4 mt-2 space-y-0.5 border-l border-border pl-4">
                      {kursiSubItems.map((item, index) => (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection(item.section)}
                            className="block w-full text-left py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link 
                  to="/kadas-kriptovalutas"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/kadas-kriptovalutas') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Kādas kriptovalūtas izvēlēties ieguldījumam
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Button */}
       <div className="mt-auto space-y-3">
  <ContactFormButton size="sm" className="w-full" />
  
  <Button
    asChild
    variant="outline"
    size="sm"
    className="w-full"
  >
    <Link to="/login">Pieslēgties</Link>
  </Button>
</div>

        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {children}
      </main>
    </div>
  );
};
