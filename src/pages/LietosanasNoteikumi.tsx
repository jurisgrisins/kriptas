import { BjorkLayout } from "@/components/BjorkLayout";

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
      </div>
    </BjorkLayout>
  );
};

export default LietosanasNoteikumi;