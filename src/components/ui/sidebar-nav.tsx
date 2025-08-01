import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarNavItem {
  title: string;
  href?: string;
  section?: string;
}

interface SidebarNavProps {
  items: SidebarNavItem[];
  className?: string;
}

export const SidebarNav = ({ items, className }: SidebarNavProps) => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block", className)}>
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
        <nav className="space-y-1">
          {items.map((item, index) => {
            if (item.href) {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.title}
                </Link>
              );
            } else if (item.section) {
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section!)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {item.title}
                </button>
              );
            }
            return null;
          })}
        </nav>
      </div>
    </div>
  );
};