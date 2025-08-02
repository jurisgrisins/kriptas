import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BjorkLayoutProps {
  children: React.ReactNode;
}

export const BjorkLayout = ({ children }: BjorkLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex">
      {/* Sticky Sidebar */}
      <aside className="w-64 bg-background border-r border-border sticky top-0 h-screen">
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
                <Link 
                  to="/kursi" 
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/kursi') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Kursi
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
                  Uzņēmumiem
                </Link>
              </li>
              <li>
                <Link 
                  to="/par-mums" 
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/par-mums') 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Par mums
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Button */}
          <div className="mt-auto">
            <Button 
              variant="default" 
              size="sm" 
              className="w-full"
            >
              Sazināties
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
