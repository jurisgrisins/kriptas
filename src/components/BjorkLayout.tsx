import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactFormButton } from "@/components/ContactFormButton";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface BjorkLayoutProps {
  children: React.ReactNode;
}

const kursiSubItems = [
  { title: "Kriptovalūtu kā investīciju evolūcija", section: "evolucija", path: "/kursi#evolucija" },
  { title: "Bitcoin lieliskai diversifikācijai", section: "diversifikacija", path: "/kursi#diversifikacija" },
  { title: "Inflācijas aizsardzības aspekts", section: "inflacija", path: "/kursi#inflacija" },
  { title: "Likviditāte 24/7", section: "likviditate", path: "/kursi#likviditate" },
  { title: "Pilna kontrole pār ieguldījumu", section: "kontrole", path: "/kursi#kontrole" },
  { title: "Digitālās dividendes", section: "dividendes", path: "/kursi#dividendes" },
  { title: "Nepārspējama vēsturiskā atdeve", section: "atdeves", path: "/kursi#atdeves" },
  { title: "Cenas svārstības", section: "cenas", path: "/kursi#cenas" },
  { title: "Kas nosaka kriptovalūtu vērtību", section: "vertiba", path: "/kursi#vertiba" },
  { title: "Ieguldījumu riski", section: "riski", path: "/kursi#riski" },
  { title: "Turpmākā kursa saturs", section: "saturs", path: "/kursi#saturs" },
];

export const BjorkLayout = ({ children }: BjorkLayoutProps) => {
  const location = useLocation();
  const [kursiExpanded, setKursiExpanded] = useState(location.pathname === '/kursi');
  
  const isActive = (path: string) => location.pathname === path;
  const isSubItemActive = (section: string) => location.hash === `#${section}`;
  
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
      <aside className="w-[381px] bg-background sticky top-0 h-screen">
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
                          <Link
                            to={item.path}
                            className={`block w-full text-left py-1.5 text-sm transition-colors ${
                              isSubItemActive(item.section)
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link 
                  to="/kuras-kriptovalutas"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/kuras-kriptovalutas') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Kurās kriptovalūtās ieguldīt
                </Link>
              </li>
              <li>
                <Link 
                  to="/infrastruktura"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/infrastruktura') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Kriptovalūtu infrastruktūra
                </Link>
              </li>
              <li>
                <Link 
                  to="/principi"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/principi') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Ieguldījumu principi
                </Link>
              </li>
              <li>
                <Link 
                  to="/latvija"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/latvija') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Ko ņemt vērā Latvijā
                </Link>
              </li>
              <li>
                <Link 
                  to="/uznemumiem"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/uznemumiem') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Kripotvalūta uzņēmumiem
                </Link>
              </li>
              <li>
                <Link 
                  to="/resursi"
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/resursi') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Papildus resursi
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Button - Fixed Position */}
          <div className="fixed bottom-8 left-8 z-50">
            <ContactFormButton size="sm" className="w-[175px]" />
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
