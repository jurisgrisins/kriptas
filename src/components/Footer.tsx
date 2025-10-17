import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border pt-8">
      <div className="mb-6">
        <div className="flex items-center w-full">
          <div className="flex gap-4">
            <Link
              to="/privatumas-politika"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privātuma politika
            </Link>
            <Link
              to="/lietosanas-noteikumi"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lietošanas noteikumi
            </Link>
            <Link
              to="/sitemap"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lapas karte
            </Link>
          </div>
          <div className="text-sm text-muted-foreground ml-auto">
            © Kopš 2025. Visas tiesības aizsargātas.
          </div>
        </div>
        <div className="my-4"></div>
        
        <div className="text-xs text-muted-foreground leading-relaxed mb-4 p-4 bg-muted/30 rounded-lg">
          <strong className="text-foreground">Saistību atruna:</strong> Pagātnes rezultāti nenozīmē, ka nākotnē rezultāti būs līdzīgi. 
          Kriptas nodrošina ieguldīšanas apmācības tikai informatīviem nolūkiem un nepiedāvā ieguldījumu konsultācijas vai ieguldījumu pakalpojumus. 
          Vienmēr ieguldiet, izmantojot tikai licencētu finanšu iestāžu vai uzticamu platformu pakalpojumus. 
          Pat sekojot labākajai ieguldīšanas praksei, ieguldīšana kriptovalūtās un citos finanšu tirgos saistās ar zaudējumu risku. 
          Pirms investēšanas rūpīgi izvērtējiet savus personīgos apstākļus un riska toleranci. 
          Visi lēmumi par ieguldījumiem vienmēr paliek jūsu personīgajā atbildībā.
        </div>
      </div>
    </footer>
  );
};
