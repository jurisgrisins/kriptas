import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivatumasPolitika = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Privātuma politika - datu aizsardzība | Kriptas</title>
        <meta name="description" content="Kriptas privātuma politika: kā mēs vācam, apstrādājam un aizsargājam jūsu personas datus saskaņā ar VDAR. Pārredzama informācija par datu drošību." />
        <meta name="keywords" content="privātuma politika, datu aizsardzība, VDAR, personas dati, konfidencialitāte" />
        <link rel="canonical" href="https://kriptas.com/privatumas-politika" />
      </Helmet>
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
              Kriptas respektē Jūsu privātumu un nodrošina personas datu apstrādi atbilstoši Eiropas Savienības Vispārīgajai datu aizsardzības regulai (VDAR). Mēs apstrādājam personas datus tikai tad, kad tam ir skaidrs mērķis un tiesisks pamats – piemēram, ar Jūsu piekrišanu, līguma izpildei, mūsu leģitīmo interešu dēļ vai lai izpildītu normatīvo aktu prasības.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4">
              <li>
                Kursu, konsultāciju un citu pakalpojumu pieteikumu apstrāde – lai noslēgtu līgumu un nodrošinātu pakalpojumu, apstrādājam Jūsu kontaktinformāciju un pieteikuma saturu.
              </li>
              <li>
                Lietotāja konta reģistrācijas administrēšana – nodrošinām piekļuvi personalizētiem pakalpojumiem, saglabājam un pārvaldām pamatdatus.
              </li>
              <li>
                Saziņa un jautājumu apstrāde – apstrādājam sniegtos kontaktus un saziņas saturu, lai sniegtu Jums atbildes vai palīdzību.
              </li>
              <li>
                Normatīvo aktu prasību izpilde – nepieciešamības gadījumā apstrādājam papildu informāciju no publiskiem reģistriem vai kredītbirojiem saskaņā ar likumu.
              </li>
              <li>
                Mārketinga paziņojumu izsūtīšana – tikai ar Jūsu nepārprotamu piekrišanu.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mēs neiegūstam un neapstrādājam īpašas kategorijas personas datus vai informāciju par sodāmību.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kādu informāciju mēs vācam
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mēs vācam tikai tos personas datus, kas nepieciešami konkrētā pakalpojuma sniegšanai vai saziņai ar Jums. Tas var ietvert:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4">
              <li>Vārds, uzvārds</li>
              <li>E-pasta adrese, tālruņa numurs</li>
              <li>Uzņēmuma/organizācijas nosaukums (ja piemērojams)</li>
              <li>Adrese (ja nepieciešams līguma sagatavošanai)</li>
              <li>
                Citi dati, kas sniegti, aizpildot pieteikumus, konta reģistrāciju, kontaktformu vai sazinoties ar mums
              </li>
              <li>
                Dati, kas saņemti no trešo pušu reģistriem, ja to paredz likums (parādu vēstures datu bāze, kredītbirojs, valsts/publiski reģistri)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jūs vienmēr dodat datus brīvprātīgi, taču noteiktu pakalpojumu sniegšanai konkrēta informācija ir obligāta – bez tās pakalpojumu nav iespējams nodrošināt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kā mēs izmantojam jūsu datus
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4">
              <li>
                Izskatām Jūsu pieteikumus, sagatavojam līgumus, organizējam konsultācijas vai sniedzam citus pieprasītos pakalpojumus.
              </li>
              <li>
                Izveidojam, uzturam un administrējam klientu kontus.
              </li>
              <li>
                Sazināmies ar Jums par piedāvājumiem, izmaiņām, jautājumiem vai pakalpojumu pilnveidošanu.
              </li>
              <li>
                Izpildām juridiskus pienākumus un nodrošinām atbilstību Latvijas Republikas un Eiropas Savienības normatīvajiem aktiem.
              </li>
              <li>
                Izsūtām mārketinga ziņojumus – tikai ar Jūsu atsevišķu piekrišanu.
              </li>
              <li>
                Nodrošinām iespēju izmantot VDAR noteiktās tiesības – pieprasīt datu labošanu vai dzēšanu, atsaukt piekrišanu u.c.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jūsu dati netiek izpausti trešajām personām, izņemot tehnoloģiju risinājumu sniedzējiem vai normatīvajos aktos paredzētajos gadījumos. Mēs vienmēr piemērojam atbilstošus drošības pasākumus, lai Jūsu dati būtu aizsargāti.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Kontaktinformācija
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jums ir tiesības detalizēti uzzināt, kādus un kāpēc Jūsu datus mēs apstrādājam, kā arī pieprasīt to labošanu vai dzēšanu, ierobežošanu vai apstrādes pārtraukšanu, jebkurā laikā atsaukt piekrišanu vai izmantot citas VDAR noteiktās tiesības.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Visi jautājumi un informācijas pieprasījumi par personas datu apstrādi ir adresējami uz mūsu e-pastu: <a href="mailto:investicijas@kriptas.com" className="text-primary underline">investicijas@kriptas.com</a>.
              Ja uzskatāt, ka Jūsu dati tiek apstrādāti neatbilstoši, Jums ir tiesības vērsties Datu valsts inspekcijā.
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
          </div>
        </footer>
      </div>
    </BjorkLayout>
  );
};

export default PrivatumasPolitika;
