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
  { title: "Digitālās dividendes", section: "dividendes" },
  { title: "Nepārspējama vēsturiskā atdeve", section: "atdeves" },
  { title: "Cenas svārstības", section: "cenas" },
  { title: "Kas nosaka kriptovalūtu vērtību", section: "vertiba" },
  { title: "Ieguldījumu riski", section: "riski" },
  { title: "Turpmākā kursa saturs", section: "saturs" },
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
          <p className="text-xl text-foreground leading-relaxed mb-8">
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
                Šie notikumi skaidri demonstrē, ka kriptovalūtas vairs netiek uzskatītas tikai par spekulatīvu instrumentu, bet kļūst par pilntiesīgu aktīvu klasi institucionālo un privāto investoru vidē              
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

              <table className="min-w-full border mt-8 mb-8 text-left">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Aktīvu klase</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Korelācija ar Bitcoin</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Paskaidrojums</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b">ASV akcijas</td>
      <td className="px-4 py-2 border-b">0.15 (zema)</td>
      <td className="px-4 py-2 border-b">
        Cenas būtībā nav saistītas, kas dod labu diversifikācijas potenciālu.<br />
        Dažos periodos pat negatīva. Nav cenu kustības saistības.
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Zelts</td>
      <td className="px-4 py-2 border-b">Praktiski 0</td>
      <td className="px-4 py-2 border-b">
        Dažos periodos pat negatīva. Nav cenu kustības saistības ar Bitcoin.
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Obligācijas</td>
      <td className="px-4 py-2 border-b">Bieži negatīva</td>
      <td className="px-4 py-2 border-b">
        Īpaši ar ASV 10 gadu obligācijām – kustas pretēji Bitcoin, īpaši tirgus krīzēs.
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Nekustamais īpašums</td>
      <td className="px-4 py-2 border-b">Praktiski 0</td>
      <td className="px-4 py-2 border-b">
        Praktiski nav saistības ar kriptovalūtu cenu izmaiņām.
      </td>
    </tr>
  </tbody>
</table>

                  <p className="text-foreground leading-relaxed">
             Savukārt 2025. gadā Bitcoin cenas korelācija ar S&P 500 ir sasniegusi nulli, t.i., Bitcoin ir bijis pilnīgi neatkarīgs no akciju tirgus kustībām. Tas vēl vairāk pastiprina digitālo aktīvu lomu kā efektīvu diversifikācijas instrumentu, jo palīdz samazināt kopējo portfeļa risku arī strauju tirgus svārstību laikā.
              </p>
            </div>
          </div>

          <div id="inflacija" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Inflācijas aizsardzības aspekts
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Bitcoin tiek bieži dēvēts par “digitālo zeltu” un ir kļuvis par vienu no populārākajiem instrumentiem inflācijas riska mazināšanai. Tā galvenā priekšrocība ir stingri ierobežotais piedāvājums – kopā tiks izveidoti tikai 21 miljons Bitcoin. Atšķirībā no tradicionālām valūtām, ko centrālās bankas var emitēt neierobežotā daudzumā, Bitcoin nav pakļauts politiskai vai monetārai manipulācijai. Tas nozīmē, ka, laikā, kad ar inflāciju saistītas valūtas vērtība krītas, Bitcoin vērtība ilgtermiņā mēdz saglabāties vai pat pieaugt. 
                Vēsturiskie dati rāda, ka Bitcoin atdeve krietni pārsniedz inflācijas līmeni, ļaujot investoriem gan saglabāt, gan palielināt savu pirktspēju pat ekonomiskās nenoteiktības apstākļos.
              </p>
            </div>
          </div>

          <div id="likviditate" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Likviditāte 24/7
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Ieguldījumi kriptovalūtās izceļas ar izcilu likviditāti (spēju pārvērst ieguldījumu naudā), kas nodrošina investoriem iespēju brīvi pirkt vai pārdot savus aktīvus jebkurā diennakts laikā, neatkarīgi no nedēļas dienas vai svētkiem. Šāda nepārtraukta piekļuve tirgum ir iespējama, pateicoties blokķēdes tehnoloģijai, kas ļauj veikt darījumus tieši starp lietotājiem, apejot tradicionālo finanšu starpniekus, piemēram, bankas vai brokerus. Tas nozīmē, ka investors var ātri un efektīvi reaģēt uz cenu izmaiņām vai neparedzētām finanšu vajadzībām, vienmēr saglabājot iespēju pārvērst savus digitālos aktīvus naudā vai citā kriptovalūtā. 
                Tādējādi kriptovalūtas piedāvā būtisku priekšrocību salīdzinājumā ar tradicionālām investīciju iespējām, kuru tirgi ir atvērti tikai noteiktos laikos un kuru darījumi var aizņemt vairākas dienas.
              </p>
            </div>
          </div>

          <div id="kontrole" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Pilna kontrole pār ieguldījumu
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Ieguldot kriptovalūtās, jūs varat pilnībā kontrolēt savus aktīvus bez jebkādiem starpniekiem. Tas nozīmē, ka kriptovalūtas iespējams glabāt savā personīgajā makā, un tikai jūs izlemjat, kad un kā ar tām rīkoties. Atšķirībā no tradicionālajiem ieguldījumiem, kur akcijas vai nauda bieži atrodas pie bankām vai brokeriem, kriptovalūtās kontrole pieder tieši jums – neviens nevar iesaldēt jūsu līdzekļus vai ierobežot piekļuvi. Tas ir iespējams, pateicoties blokķēdes tehnoloģijai, kas nodrošina, ka īpašumtiesības uz digitālajiem aktīviem tiek reģistrētas publiskā veidā (bet saglabājot anonimināti). Vienkārši sakot, ar kriptovalūtām jūs pats esat sava “bankas” īpašnieks, saglabājot maksimālu brīvību un drošību pār saviem līdzekļiem. 
                Turklāt, iespēja kriptovalūtas pašam kontrolēt (“self custody”) padara tās par efektīvu aizsardzību pret ģeopolitiskiem riskiem un iespējamiem ierobežojumiem, ko var ieviest valdības vai finanšu institūcijas dažādās valstīs.
              </p>

            </div>
          </div>
      

 <div id="dividendes" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Digitālās dividendes
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Staking ir process, kurā investors iegulda (iesaldē) savas kriptovalūtas noteiktā blokķēdes tīklā, lai palīdzētu tīkla darbībai un uzturēšanai — par to saņemot procentu ienākumus jeb atlīdzību. Staking būtībā nozīmē, ka jūs uzticat savus līdzekļus blokķēdei un par to saņemat fiksētu vai mainīgu gada peļņu (APR). Šī iespēja ir īpaši raksturīga tādām valūtām, kurās tiek izmantots "proof-of-stake" (PoS) mehānisms. Tas ir veids, kā padarīt ieguldījumus kriptovalūtās vēl ienesīgākus un automātiski saņemt pasīvos ienākumus, 
                līdzīgi kā procentus par depozītu tradicionālajā bankā. Staking tiek izmantots, lai nodrošinātu tīkla drošību un decentralizāciju, vienlaikus ļaujot investoriem nopelnīt papildus atdevi no saviem aktīviem.
              </p>
              <table className="min-w-full border mt-8 mb-8 text-left">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Kriptovalūta</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Gada procentu likme</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b">Ethereum</td>
      <td className="px-4 py-2 border-b">3.06%</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Cardano</td>
      <td className="px-4 py-2 border-b">4.69%</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Solana</td>
      <td className="px-4 py-2 border-b">4.41%</td>
    </tr>
  </tbody>
</table>

<p className="text-foreground leading-relaxed mb-4">
                Tādējādi kriptovalūtas ne tikai kalpo kā efektīvs portfeļa diversifikators un aizsardzība pret inflāciju, bet, pateicoties staking iespējām jeb digitālajām dividendēm, tās var investoriem nodrošināt arī regulārus, pasīvus ienākumus.
              </p>
            </div>
          </div>
       

         <div id="atdeves" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Vēsturiskā atdeve - nepārspējama 
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Kriptovalūtu ieguldījumu galvenais pievilcības faktors ir ļoti augstā vēsturiskā atdeve, kas pārspēj visus citus aktīvu veidus. 
                Bitcoin ir bijis labākais ieguldījumu aktīvs pēdējā dekādē, sniedzot 10 reizes lielāku atdevi nekā ieguldījums ASV tehnoloģiju uzņēmumu indeksā Nasdaq 100. Piemēram, pēdējos 10 gados vidēji Bitcoin vērtība ir pieaugusi par 83% gadā. 
              </p>
<table className="min-w-full border mt-8 mb-8 text-left">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Aktīvs</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">10 gadu atdeve</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Gadā (10 gadi)</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Gadā (5 gadi)</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Gadā (1 gads)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b">Bitcoin</td>
      <td className="px-4 py-2 border-b">42,597%</td>
      <td className="px-4 py-2 border-b">83.0%</td>
      <td className="px-4 py-2 border-b">62.4%</td>
      <td className="px-4 py-2 border-b">121.0%</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">S&amp;P 500</td>
      <td className="px-4 py-2 border-b">194.5%</td>
      <td className="px-4 py-2 border-b">12.0%</td>
      <td className="px-4 py-2 border-b">13.7%</td>
      <td className="px-4 py-2 border-b">23.9%</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Nasdaq 100</td>
      <td className="px-4 py-2 border-b">541.0%</td>
      <td className="px-4 py-2 border-b">20.0%</td>
      <td className="px-4 py-2 border-b">21.7%</td>
      <td className="px-4 py-2 border-b">14.4%</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Zelts</td>
      <td className="px-4 py-2 border-b">206.0%</td>
      <td className="px-4 py-2 border-b">12.0%</td>
      <td className="px-4 py-2 border-b">9.9%</td>
      <td className="px-4 py-2 border-b">28.7%</td>
    </tr>
  </tbody>
</table>

              
<p className="text-foreground leading-relaxed mb-4">
                Ja investors 2015. gada sākumā katrā no šiem aktīviem būtu ieguldījis EUR 1,000, tad līdz 2024. gada beigām ieguldījuma rezultāts būtu ļoti atšķirīgs. Investīcija Bitcoin desmit gadu laikā būtu pārvērtusies apmēram par EUR 426,000. 
  Tajā pašā laikā EUR 1,000 S&P 500 indeksā būtu izauguši līdz aptuveni EUR 2,945 (+194.5%), Nasdaq 100 indeksā – līdz aptuveni EUR 6,410 (+541%), bet ieguldījums zeltā pieaugtu vērtībā līdz apmēram EUR 3,060 (+206%).
       </p>      
        
<p className="text-foreground leading-relaxed mb-4">
                Lai gan pēdējā gada atdeves ir bijušas iespaidīgas, jāņem vērā, ka vēsturiskie rezultāti negarantē līdzīgus panākumus nākotnē. Īpaši augstās ienesīguma likmes, kas novērotas pēdējā desmitgadē, ir tapušas laikā, kad gan globālā ekonomika, gan 
  finanšu tirgi kopumā piedzīvojuši izteiktu izaugsmi un investīcijām labvēlīgus apstākļus. Šādi rezultāti būtiski pārsniedz ilgtermiņa vidējos rādītājus un, mainoties ekonomiskajam ciklam, var nepiepildīties arī turpmāk.
       </p>  
               
<p className="text-foreground leading-relaxed mb-4">
               Jāuzsver arī, ka Bitcoin ir ļoti jauna aktīvu klase – tās vēsture ilgst tikai nedaudz vairāk kā desmit gadus, un par tās uzvedību ilgtermiņā, īpaši recesiju vai lielu finanšu krīžu apstākļos, vēl trūkst pierādījumu. Investoriem ir jābūt 
  piesardzīgiem: Bitcoin nākotnes atdeves un riska profili var būtiski atšķirties no līdz šim novērotajiem. Portfeļa diversifikācija un pārdomāta riska vadība ir būtiska, ieguldot jebkurā jaununā vai strauji augošā aktīvu klasē.
  </p>
</div>
          </div>

<div id="cenas" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Cenas svārstības
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
               Viens no svarīgākajiem jēdzieniem, kas jāzina par Bitcoin un līdzīgiem ieguldījumiem, ir svārstīgums jeb volatilitāte. Tas nozīmē, cik strauji un cik lielā apmērā aktīva cena var pieaugt vai samazināties īsā laikā. Lielam svārstīgumam piemīt 
                augstāks risks – cena var gan ātri pieaugt, gan ļoti strauji nokrist. Šādu aktīvu cena ir daudz neparedzamāka nekā, piemēram, akcijām vai nekustamajam īpašumam. Vēsturiski Bitcoin ir bijis ārkārtīgi svārstīgs – tā vērtība var dienās vai nedēļās gan dubultoties, gan pēkšņi sevi samazināt uz pusi. Lai gan pēdējos gados šī svārstība samazinās, arī šobrīd Bitcoin joprojām ir daudz nepastāvīgāks par tradicionālajiem finanšu aktīviem.
              </p>
<p className="text-foreground leading-relaxed mb-4">
                Tomēr par šo risku ir saņemta arī atlīdzība: investori, kuri spējuši saglabāt mieru un neatbrīvoties no Bitcoin visos tirgus kāpumos un kritumos, līdz šim ir tikuši pie būtiski lielākas peļņas nekā tie, kas izvēlējās drošākus, mazāk svārstīgus ieguldījumus. Citiem vārdiem, tie, kas izturējuši lielās cenu svārstības un nav pārdevuši uz panikas viļņa, ilgtermiņā ir nopelnījuši daudz vairāk nekā tradicionālo aktīvu īpašnieki. 
  Protams, šādas tendences nav garantētas arī nākotnē, taču līdz šim liela svārstība Bitcoin gadījumā ir nozīmējusi arī augstāku potenciālo atdevi – ja investors ir pacietīgs un gatavs izturēt "amerikāņu kalniņus".
              </p>

 <table className="min-w-full border mt-8 mb-8 text-left">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Aktīvs</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Vidējā cenas svārstīguma (%) robeža 2015–2021</th>
      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Pēdējo gadu (2023–2024) svārstīgums (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border-b">Bitcoin</td>
      <td className="px-4 py-2 border-b">70–90</td>
      <td className="px-4 py-2 border-b">45–55</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">S&amp;P 500</td>
      <td className="px-4 py-2 border-b">15–20</td>
      <td className="px-4 py-2 border-b">15–20</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Nasdaq 100</td>
      <td className="px-4 py-2 border-b">18–23</td>
      <td className="px-4 py-2 border-b">17–21</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border-b">Zelts</td>
      <td className="px-4 py-2 border-b">12–16</td>
      <td className="px-4 py-2 border-b">14–16</td>
    </tr>
  </tbody>
</table>


<p className="text-foreground leading-relaxed mb-4">
                Bitcoin svārstīgums (volatilitāte) vēsturiski ir bijis 3,6 līdz 5,1 reizes augstāks nekā zeltam vai globālajiem akciju tirgiem (piem., S&P 500). 2015.–2021. gadā Bitcoin svārstīgums bieži pārsniedza 70–90%, kamēr zelta vai akciju indeksu tipiskā gada svārstība bija 10–20%. Pēdējos gados, īpaši kopš 2023. gada, Bitcoin volatilitāte ir būtiski samazinājusies. Šī tendence liecina, ka ar aktīva “briedumu” cena 
  kļūst mazliet stabilāka, īpaši salīdzinot ar Bitcoin pirms 6–8 gadiem.un gatavs izturēt "amerikāņu kalniņus".
              </p>
              
            </div>
          </div>

          <div id="vertiba" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Kas nosaka kriptovalūtu vērtību
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
              Kriptovalūtu vērtību nosaka uzticēšanās, praktiska pielietojamība un to īpašības. Atšķirībā no tradicionālām valūtām vai zelta, kriptovalūtai nav fiziska seguma vai valdības garantijas — tās vērtība rodas no tā, kā cilvēki to izmanto un cik ļoti tai uzticas. Bitcoin, piemēram,
                ir kļuvis par digitālo ekvivalentu zeltam – to sauc par “vērtības uzkrājēju”, jo cilvēki uzskata, ka tas labi saglabā vērtību ilgtermiņā. Tā vērtība izriet no tā, ka piedāvājums ir stingri ierobežots un neviens to nevar piepeši "pieprintēt" klāt kā daudzas nacionālās valūtas. Jo vairāk cilvēku tic un izmanto Bitcoin šādiem mērķiem, jo vērtīgāks tas kļūst.
              </p>
<p className="text-foreground leading-relaxed mb-4">
               Citas kriptovalūtas kļūst vērtīgas galvenokārt ar savu praktisko pielietojumu. Piemēram, Ethereum ir platforma, kurā var veidot “viedos līgumus” jeb automatizētus darījumus, kas notiek bez cilvēku starpniecības. Dažādas kriptovalūtas tiek izmantotas spēlēs, 
  mākslas un digitālo kolekcionējamu priekšmetu tirgošanai (“NFT”), kā arī DeFi lietotnēs — finanšu pakalpojumos, kas darbojas bez bankām.
              </p>
<p className="text-foreground leading-relaxed mb-4">
              Viens ļoti praktisks piemērs, kur kriptovalūtas iegūst vērtību tieši no pielietojuma: valstīs ar nestabilu vai ļoti vāju vietējo naudu (piemēram, Venecuēla, Argentīna vai dažas Āfrikas valstis) cilvēki arvien biežāk lieto Bitcoin vai citas kriptovalūtas kā 
  alternatīvu norēķiniem un līdzekļu glabāšanai, jo tās ir uzticamākas un vieglāk pārsūtāmas nekā vietējā valūta.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
              Stabilās kriptovalūtas jeb “stablecoins” (piemēram, USDT, USDC) tiek piesaistītas dolāram vai citai stabilai valūtai. To vērtība rodas no tā, ka tās ļauj ātri, lēti un droši pārskaitīt naudu starptautiski — pat uz valstīm vai reģioniem, kur starptautiskie banku pārskaitījumi ir dārgi, lēni vai sarežģīti. 
                Piemēram, daudzi cilvēki izmanto stablecoinu, lai pārsūtītu naudu ģimenei uz citu pasaules malu, apietot banku nodevas un pārskaitījumu kavēšanos.
              </p>
              
            </div>
          </div>

             <div id="riski" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Ieguldījumu riski
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
            Ieguldot kriptovalūtās, viens no svarīgiem riskiem ir ļoti lielā cenu svārstība. Tas nozīmē, ka kriptovalūtu cena var īsā laikā gan strauji pieaugt, gan aiziet strauji lejup – dažkārt pat dienās vai nedēļās. 
                Šādas svārstības rada risku, ka investors var zaudēt būtisku daļu savas ieguldītās naudas, ja jāpārdod kriptovalūta tieši tirgus krituma brīdī.
              </p>
<p className="text-foreground leading-relaxed mb-4">
               Kriptovalūtu pasaulē ir ļoti daudz projektu, taču tikai neliela daļa no tiem patiesi ir dzīvotspējīgi vai ilgtspējīgi. Savu kriptovalūtu izveidot ir vienkārši un daudzi to ir izdarījuši (piemēram, tajā skaitā Donalds Tramps). Tomēr liela daļu šo valūtu ir bez jebkādas praktiskas funkcijas, bet drīzāk kalpo kā joks un spekulāciju avots  
  (“memecoins”). Investoram, kas iegulda iltermiņā ir ļoti rūpīgi jāizvēlas kriptovalūta, lai tā nebūtu spekulatīva, bet ar praktisku jēgu un pielietojumu. 
              </p>
<p className="text-foreground leading-relaxed mb-4">
              Kriptovalūtu nozare kopumā ir vēl ļoti jauna. Savukārt darījumi ar kriptovalūtām var būt diezgan sarežģiti, neērti vai tehniski komplicēti (tas gan strauji uzlabojas)  un tieši šī iemesla dēļ tajā ir plaši izplatīta krāpniecība un nenoteiktība. Turklāt, investoriem jāuzmanās arī no tā, ka var bankrotēt kriptovalūtas apmaiņas platforma vai serviss, kurā notiek darījumi ar monētām. 
  Pašu digitālo valūtu tāpat jāglabā īpaši uzmanīgi neatkarīgi no tā vai nolemj glabāt to pats vai kādā trešās puses pakalpojuma piedāvātājā (par to plašāk vēlāk).
              </p>
              <p className="text-foreground leading-relaxed mb-4">
             Pastāv arī juridiski un politiski riski – vairākas valstis, piemēram, Ķīna vai Alžīrija, kriptovalūtas ir pilnībā aizliegušas. Tikmēr ASV un Eiropa pašlaik ir pasaules līderi kriptovalūtu regulēšanā, veidojot arvien drošāku un skaidrāku juridisko bāzi, lai tās varētu kļūt par atzītu un tiesiski drošu ieguldījuma veidu. 
                Tāpat investoriem jāņem vērā, ka izmaiņas valstu likumdošanā var būtiski ietekmēt, cik ērti un droši iespējams izmantot kriptovalūtas nākotnē.
              </p>
                 <p className="text-foreground leading-relaxed mb-4">
            Viens no būtiskākajiem ilgtermiņa riskiem, ar ko jārēķinās, ieguldot kriptovalūtās, ir iespēja, ka to vērtība var ievērojami samazināties vai pat pilnībā izzust. Pirmkārt, kriptovalūtu vērtība lielā mērā balstās uz lietotāju uzticēšanos — ja sabiedrība vairs neuzskatīs, ka Bitcoin vai kāda cita valūta ir labs vērtības uzkrājējs vai drošs instruments vērtības pārnešanai, 
                   tās cena var strauji krist. Otrkārt, pastāv tehnoloģiski riski: ja nākotnē, piemēram, kvantu datori spēs uzlauzt kriptogrāfiskos algoritmus, uz kuriem balstās lielākā daļa kriptovalūtu, tas var padarīt esošās sistēmas nedrošas un sagraut uzticību visai nozarei. Treškārt, ilgtermiņā kriptovalūtas var zaudēt vērtību arī tad, ja tām neizdosies iegūt plašu praktisku pielietojumu — ja tās netiks izmantotas reālās norēķinu, uzkrājumu vai finanšu inovāciju situācijās, to eksistence var zaudēt nozīmi. Šo iemeslu dēļ ieguldītājiem vienmēr jārēķinās ar iespēju, ka pat vispopulārāko kriptovalūtu cena ilgtermiņā var būtiski samazināties.
              </p>
            </div>
          </div>
          
<div id="saturs" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Turpmākā kursa saturs
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Tālākajā kursa saturā tu uzzināsi:
              </p>

              <div className="flex items-center space-x-2 ml-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Kā vienkārši uzsākt ieguldīt kriptovalūtās</span>
              </div>
              <div className="flex items-center space-x-2 ml-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Kā izvēlēties, kurās kriptovalūtās ieguldīt</span>
              </div>
              <div className="flex items-center space-x-2 ml-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Kā glabāt kriptovalūta</span>
              </div>
              <div className="flex items-center space-x-2 ml-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Kā un kur izveidot nepieciešamos kontus</span>
              </div>
              <div className="flex items-center space-x-2 ml-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Ko īpaši ņemt vērā ieguldot kriptovalūtās Latvijā</span>
              </div>

<p className="text-foreground leading-relaxed mb-4 mt-8">
                Apmācības ir piemērotas ikvienam Latvijas iedzīvotājam, kurš vēlas sākt uzkrāt vai ieguldīt līdzekļus kriptovalūtās. Lai piedalītos, nav nepieciešamas nekādas priekšzināšanas par finansēm vai digitālajiem aktīviem — viss tiks izskaidrots vienkārši un saprotami arī pilnīgiem iesācējiem.
              </p>
            </div>
          </div>
          
        </section>
          
        {/* Email Subscription */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Uzzini pirmais!
            </h2>
            <p className="text-muted-foreground mb-6">
              Atstāj savu e-pastu, lai saņemtu paziņojumu, kad kursa materiāli būs pieejami
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                type="email" 
                placeholder="Tava e-pasta adrese"
                className="flex-1"
              />
              <Button variant="default" size="lg">
                Pieteikties
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Dati tiek apstrādāti saskaņā ar Privātuma politiku
            </p>
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
