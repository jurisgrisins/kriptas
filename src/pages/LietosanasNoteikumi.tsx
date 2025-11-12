import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LietosanasNoteikumi = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Lietošanas noteikumi | Kriptas</title>
        <meta name="description" content="Kriptas lietošanas noteikumi: pakalpojumu izmantošanas nosacījumi, atbildības ierobežojumi un lietotāju tiesības. Juridiski saistoši noteikumi." />
        <meta name="keywords" content="lietošanas noteikumi, servisa noteikumi, pakalpojumu izmantošana, juridiskie noteikumi" />
        <link rel="canonical" href="https://kriptas.com/lietosanas-noteikumi" />
      </Helmet>
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
              Izmantojot Kriptas mājaslapu un pakalpojumus, Jūs piekrītat šiem lietošanas noteikumiem. Lūdzu, iepazīstieties ar tiem pirms pakalpojumu izmantošanas. Ja nepiekrītat noteikumiem, mājaslapas pakalpojumus izmantot nav atļauts.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Pakalpojumu izmantošana
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mūsu sniegtā informācija, tostarp kursi un materiāli, ir paredzēta tikai izglītības nolūkiem un nav uzskatāma par juridisku, finanšu vai investīciju konsultāciju. Katrs lietotājs ir atbildīgs par savu lēmumu pieņemšanu un rezultātiem. Kriptas neuzņemas atbildību par lietotāja darbībām vai izvēlēm, kas balstītas uz mūsu materiāliem vai saturu.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Atbildības ierobežojums
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Visi ieguldījumi un finanšu lēmumi tiek veikti uz Jūsu pašu atbildību. Kriptas negarantē materiālu vai kursu rezultātu precizitāti, aktualitāti vai atbilstību Jūsu mērķiem. Mēs neuzņemamies atbildību par jebkādiem zaudējumiem vai sekām, kas radušās, izmantojot mūsu pakalpojumus.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Intelektuālais īpašums
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Visa mājaslapas, kursu un ar pakalpojumiem saistītā satura intelektuālā īpašuma tiesības pieder Kriptas, izņemot gadījumus, kad īpašnieks ir norādīts atsevišķi. Aizliegta jebkāda materiālu kopēšana, izplatīšana vai izmantošana bez rakstiskas atļaujas.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Noteikumu izmaiņas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mēs paturam tiesības jebkurā brīdī mainīt vai papildināt šos lietošanas noteikumus pēc saviem ieskatiem. Aktuālā noteikumu versija vienmēr ir publicēta šajā lapā, un izmaiņas ir spēkā no publicēšanas brīža.
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
