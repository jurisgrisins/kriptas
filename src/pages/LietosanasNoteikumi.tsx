import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";

const LietosanasNoteikumi = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-medium text-foreground mb-8">
          Lietošanas noteikumi
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Vispārīgie noteikumi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Izmantojot Kriptas pakalpojumus, jūs piekrītat šiem lietošanas noteikumiem. 
              Lūdzu, rūpīgi izlasiet šos noteikumus pirms pakalpojumu izmantošanas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Pakalpojumu izmantošana
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mūsu kursi un materiāli ir paredzēti tikai izglītības nolūkiem. Tie nav uzskatāmi 
              par finansiāliem padomiem vai ieguldījumu rekomendācijām.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Atbildības ierobežojums
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kriptas neuzņemas atbildību par jūsu ieguldījumu lēmumiem vai to sekām. 
              Visi ieguldījumi tiek veikti uz jūsu pašu atbildību.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Intelektuālais īpašums
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Viss kursu saturs, materiāli un informācija ir Kriptas intelektuālais īpašums 
              un ir aizsargāts ar autortiesībām.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Noteikumu izmaiņas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mēs paturam tiesības jebkurā laikā mainīt šos lietošanas noteikumus. 
              Izmaiņas stājas spēkā to publicēšanas brīdī.
            </p>
          </section>
        </div>
        
        {/* Footer */}
        <footer className="border-t border-border pt-8 mt-16">
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
      </div>
    </BjorkLayout>
  );
};

export default LietosanasNoteikumi;