import { BjorkLayout } from "@/components/BjorkLayout";

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
      </div>
    </BjorkLayout>
  );
};

export default PrivatumasPolitika;