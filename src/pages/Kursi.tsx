import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Kriptovalūtu kā investīciju evolūcija", section: "evolucija" },
  { title: "Bitcoin lieliskai diversifikācijai", section: "diversifikacija" },
  { title: "Inflācijas aizsardzības aspekts", section: "inflacija" },
  { title: "Likviditāte 24/7", section: "likviditate" },
  { title: "Pilna kontrole pār ieguldījumu", section: "kontrole" },
];

const Kursi = () => {
  return (
    <BjorkLayout>
      <div className="flex gap-8">
        {/* Sidebar Navigation */}
         <div className="mb-8">
    <SidebarNav items={navItems} />
  </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-8 py-16 pl-0">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Kā ieguldīt kriptovalūtās
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Praktiska un viegli saprotama pieeja, kā droši sākt ieguldīt kriptovalūtās – izvairoties no riskantām spekulācijām un liekām komisijām. 
            Šim kursam nav nepieciešamas iepriekšējas zināšanas par kriptovalūtām vai ieguldīšanu — viss tiek izskaidrots vienkārši, saprotami un piemērots arī pilnīgiem iesācējiem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Pieteikties Kursam
            </Button>
            <Button variant="outline" size="lg">
              Lejupielādēt Programmu
            </Button>
          </div>
        </section>

        {/* Main Content Sections */}
        <section id="ievads" className="mb-24">
          <h2 className="text-3xl font-medium text-foreground mb-8">
            Ievads: Kapēc ieguldīt kriptovalūtās
          </h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground leading-relaxed mb-4">
              Šajā ievadsadaļā mēs apkopojam galvenos argumentus, kapēc ir vērts ieguldīt kriptovalūtās. Tāpat identificēsim arī galvenos šādu ieguldījumu riskus.
            </p>
      
          </div>

    <div id="evolucija" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Kriptovalūtu evolūcija no eksperimenta uz nopietnu aktīvu klasi
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Pēdējo gadu laikā kriptovalūtas ir piedzīvojušas dramatisku transformāciju no tehnoloģiska eksperimenta uz nopietnu ieguldījumu instrumentu, kas ieguvusi plašu atzinību no vadošajiem finanšu institūtiem un regulatoriem. Šo pārmaiņu apliecina fakts, 
                ka tādi finanšu nozares globāli līderi kā BlackRock tagad piedāvā kriptovalūtu ieguldījumu produktus – būtisks pavērsiens, ņemot vērā šo kompāniju iepriekšējo piesardzību.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
           Savukārt 2024. gadā ASV atļāva veidot Bitcoin indeksu fondus, padarot šo aktīvu vēl vieglāk pieejamu gan privātiem, gan institucionālajiem investoriem. Arī Eiropā arvien vairāk finanšu pakalpojumu sniedzēju, ievieš un paplašina digitālo aktīvu investīciju produktus, atbildot uz pieaugošo investoru interesi. 
                Šie notikumi skaidri demonstrē, ka kriptovalūtas vairs netiek uzskatītas tikai par spekulatīvu instrumentu, bet kļūst par pilntiesīgu aktīvu klasi institucionālo un privāto investoru vi
              </p>
      
            </div>
          </div>
          
          <div id="diversifikacija" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Bitcoin lieliskai diversifikācijai
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Veiksmīgam ieguldījumu portfelim ir svarīgi iekļaut dažādus aktīvus, kuri uzvedas atšķirīgi dažādos tirgus apstākļos. Šo dažādību sauc par diversifikāciju, un tās mērķis ir samazināt kopējo risku. Šeit svarīga loma ir korelācijai — tā parāda, cik līdzīgi vai atšķirīgi divu aktīvu cenas mainās vienlaikus. Ja korelācija ir tuvu vienam, šo aktīvu vērtība visbiežāk mainās vienā virzienā. 
                Ja korelācija ir nulle vai tuvu nullei, šo aktīvu cenas savstarpēji praktiski nav saistītas. Negatīva korelācija nozīmē, ka viena aktīva cena bieži aug tad, kad otra krīt, un otrādi.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
           Piemēram, Bitcoin ilgtermiņā salīdzinot  ar tradicionāliem aktīviem, piemēram, akcijām vai obligācijām, ir bijusi zema korelācija. Tas nozīmē, ka, pievienojot Bitcoin portfelim, ir iespējams labāk izkliedēt riskus — kad vienas aktīvu klases cena krīt, citas to var kompensēt. Tieši tāpēc daudzi investori izvēlas ieguldīt vairākās atšķirīgās aktīvu klasēs — akcijās, 
                obligācijās, nekustamajā īpašumā, zeltā, kriptovalūtās, u.c. — lai ieguldījumu portfelis būtu drošāks un stabilāks ilgtermiņā.
              </p>
              <p className="text-foreground leading-relaxed">
             Finanšu investīciju kompānija Blackrock ir veikusi pētījumu, kura rezultātā ir identificējusi, ka pēdējo 10 gadu griezumā Bitcoin cenai ir bijusi ļoti zema korelācija ar tradicionāliem ieguldījumu aktīviem, tajā skaitā akcijām: 
              </p>
            </div>
          </div>

          <div id="inflacija" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Inflācijas aizsardzības aspekts
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Viens no Bitcoin pievilcīgākajiem aspektiem ir tā ierobežotā piedāvājuma apjoms - 
                maksimāli 21 miljons monētu, kas to padara par deflacionāru aktīvu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kamēr centrālās bankas turpina drukāt naudu un palielināt inflāciju, 
                Bitcoin algoritms nodrošina, ka jaunu monētu emisija pakāpeniski samazinās 
                līdz nullei līdz 2140. gadam.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Šī īpašība padara Bitcoin par potenciālu aizsardzību pret fiat valūtu 
                pirkspējas samazināšanos ilgtermiņā.
              </p>
            </div>
          </div>

          <div id="likviditate" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Likviditāte 24/7
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Atšķirībā no tradicionālajiem finanšu tirgiem, kriptovalūtu tirgi darbojas 24 stundas 
                dienā, 7 dienas nedēļā, 365 dienas gadā.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Šī nepārtrauktā likviditāte nozīmē, ka investori var reaģēt uz tirgus izmaiņām 
                reāllaikā, neatkarīgi no tā, vai ir darba diena vai brīvdienas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Turklāt moderno kriptovalūtu biržu attīstība ir nodrošinājusi augstu likviditāti 
                galvenajām kriptovalūtām, ļaujot veikt lielus darījumus ar minimālu ietekmi uz cenu.
              </p>
            </div>
          </div>

          <div id="kontrole" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Pilna kontrole pār ieguldījumu
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kriptovalūtas piedāvā investoriem precedenta nezināmu kontroles līmeni pār saviem aktīviem. 
                Izmantojot privātās atslēgas, jūs esat pilnīgs savu līdzekļu īpašnieks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nav nepieciešams paļauties uz bankām, brokeriem vai citām finanšu iestādēm - 
                jūs varat pārvaldīt savus ieguldījumus tieši, bez starpniekiem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Šī pašnoteikšanās nozīmē gan lielāku atbildību par drošību, 
                gan brīvību no tradicionālo finanšu sistēmu ierobežojumiem un komisijām.
              </p>
            </div>
          </div>
        </section>

        {/* Email Subscription */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Saņemiet Paziņojumus par Vietnes Atvēršanu
            </h2>
            <p className="text-muted-foreground mb-6">
              Būsiet pirmie, kas uzzinās, kad mūsu vietne būs pilnībā pieejama ar visiem kursiem un pakalpojumiem.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                type="email" 
                placeholder="Jūsu e-pasta adrese"
                className="flex-1"
              />
              <Button variant="default">
                Pieteikties
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Mēs netālosim jūsu e-pastu trešajām pusēm. Varat atteikties jebkurā laikā.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Gatavi Uzsākt Kriptovalūtu Investēšanu?
            </h2>
            <p className="text-muted-foreground mb-6">
              Apgūstiet kriptovalūtu investēšanas pamatus un sāciet veidot savu digitālo aktīvu portfeli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Pieteikties Kursam
              </Button>
              <Button variant="outline" size="lg">
                Konsultācija
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
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
      </div>
    </BjorkLayout>
  );
};

export default Kursi;
