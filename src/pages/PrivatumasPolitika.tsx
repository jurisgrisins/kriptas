import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";

const PrivatumasPolitika = () => {
  return (
    <BjorkLayout>
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-medium text-foreground mb-8">
          Privātuma politika
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Datu apstrāde
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kriptas respektē jūsu privātumu un ir apņēmušies aizsargāt jūsu personas datus. 
              Šī privātuma politika paskaidro, kā mēs vācam, izmantojam un aizsargājam jūsu informāciju.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kādu informāciju mēs vācam
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mēs vācam informāciju, ko jūs sniedzat brīvprātīgi, piemēram, reģistrējoties kursiem 
              vai sazinājoties ar mums. Tas ietver jūsu vārdu, e-pasta adresi un citu kontaktinformāciju.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kā mēs izmantojam jūsu datus
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jūsu personas dati tiek izmantoti, lai sniegtu pieprasītos pakalpojumus, uzlabotu mūsu 
              piedāvājumu un sazinātos ar jums par mūsu kursiem un pakalpojumiem.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kontaktinformācija
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ja jums ir jautājumi par šo privātuma politiku, lūdzu, sazinieties ar mums.
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

export default PrivatumasPolitika;