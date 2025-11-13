import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopCryptoChart from "@/assets/memecoins.png";

const KadasKriptovalutas = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <BjorkLayout>
      <Helmet>
        <title>Kurās kriptovalūtās ieguldīt 2025 | Bitcoin, Ethereum</title>
        <meta name="description" content="Salīdzini Bitcoin, Ethereum, Solana un citas kriptovalūtas. Uzzini, kurās digitālajās valūtās ieguldīt 2025. gadā. Ekspertu analīze un ieteikumi." />
        <meta name="keywords" content="bitcoin, ethereum, solana, cardano, labākās kriptovalūtas, crypto salīdzinājums, altcoins" />
        <link rel="canonical" href="https://kriptas.com/kuras-kriptovalutas" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Kādas kriptovalūtas izvēlēties ieguldījumiem
          </h1>
          <p className="text-xl text-foreground leading-relaxed mb-8">
            Šajā sadaļā apkopojam informāciju par galvenajām kriptovalūtām tirgū, to pielietojumu un priekšrocībām, 
            lai palīdzētu jums izprast, kurās digitālajās valūtās vērts ieguldīt 2025. gadā.
          </p>
        </section>

        {/* Main Content Sections */}
        <section id="koncentracija" className="mb-24">
          <div id="tirgus" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Tirgus koncentrācija
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Kriptovalūtu tirgus ir ļoti koncentrēts – tas nozīmē, ka lielākā daļa kriptovalūtu vērtība gulstās uz pāris vadošajām digitālajām valūtām. 
                No vairāk nekā 20,000 (!) pastāvošajām kriptovalūtām, tikai aptuveni desmit ir ar pasaules mērogā nozīmīgu pielietojumu un darījumu apmēru. 
                Bitcoin ir līderis ar <span className="font-bold text-primary">vairāk nekā pusi no visa tirgus</span> – 2025. gada vidū visu Bitcoin vērtība veidoja 2.1 triljonus eiro, 
                kas ir 70% no visu digitālo valūtu kopīgās vērtības. Salīdzinājumam, kopējais eiro naudas apjoms (visas banknotes, nauda norēķinu kontos un depozītos) ir 15.7 triljoni eiro.
              </p>
              
              <div className="my-8 p-6 bg-muted rounded-lg">
                <h4 className="text-lg font-medium mb-4">Kriptovalūtu tirgus daļas</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bitcoin</span>
                    <span className="text-primary font-bold">69.6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ethereum</span>
                    <span className="text-primary font-bold">13.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Top 3-10 kripto kopā</span>
                    <span className="font-bold">~15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pārējās monētas</span>
                    <span className="font-bold">~2%</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                Ēteris (Ethereum) ir otrajā vietā ar 13% tirgus daļu. Nākošās 3-10 populārākās kriptovalūtas (BNB, Solana, XRP, Dogecoin un citas) 
                kopā aizņem ap 15% tirgus, savukārt visas pārējās kriptovalūtas – tikai 2% no kopīgā tirgus. Tāpat svarīgi ir pieminēt, 
                ka kriptovalūtu cenu svārstības var būt diezgan straujas un <span className="font-bold text-primary">Top 10 vērtīgāko kriptovalūtu saraksts var diezgan strauji mainīties</span>.
              </p>

                      </div>
          </div>

          <div id="top10" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Galvenās 10 kriptovalūtas (2025. gada vidū)
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                Un kāda ir tās katras galvenās īpašības un pielietojums, ir apkopots sekojošajā tabulā:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border mt-8 mb-8 text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Nosaukums (Simbols)</th>
                      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Tirgus vērtība (EUR)</th>
                      <th className="px-4 py-2 border-b bg-gray-100 font-medium">Pielietojums</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Bitcoin (BTC)</td>
                      <td className="px-4 py-2 border-b">€2.1T</td>
                      <td className="px-4 py-2 border-b">
                        Digitālā vērtības rezerve un makroekonomisks aktīvs inflācijas aizsardzībai. Institucionālo investoru portfeļa diversifikācijas instruments un starptautisko maksājumu risinājums.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Ethereum (ETH)</td>
                      <td className="px-4 py-2 border-b">€396B</td>
                      <td className="px-4 py-2 border-b">
                        Vadošā decentralizēto lietotņu un automātisko līgumu platforma, kas būtībā kalpo kā jaudīgs izkliedēts dators. Plaši izmantots NFT (non-fungible tokens) izveidošanai un tirdzniecībai (skat, piemēram <a href="https://www.airbaltic.com/en/planies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Airbaltic Planies</a>). Bet ir arī virkne citu pielietojumu, tajā skaitā finanšu nozarē, datorspēlēs un citur.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">XRP (XRP)</td>
                      <td className="px-4 py-2 border-b">€160B</td>
                      <td className="px-4 py-2 border-b">
                        Kriptovalūta ar galveno specializāciju nodrošināt starptautiskos maksājumus. SWIFT sistēmas efektīva alternatīva korporatīvajiem pārskaitījumiem. Starp šīs kriptovalūtas tehnoloģiju izmantotājiem ir arī virkne banku, piemēram, Bank of America un SEB.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">BNB (BNB)</td>
                      <td className="px-4 py-2 border-b">€97B</td>
                      <td className="px-4 py-2 border-b">
                        Kriptovalūtu biržas Binance ekosistēmas token, kas kaut kādā mērā ir līdzīgs lojalitātes punktu sistēmai, ko, piemēram, piedāvā Rimi vai AirBaltic. BNB var izmantot gan atlaidēm kriptovalūtas tirdzniecībai Binance platformā, gan lai gūtu citus ieguvumus Binance izveidotā ekosistēmā un nedaudz ārpus tās.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Solana (SOL)</td>
                      <td className="px-4 py-2 border-b">€81.6B</td>
                      <td className="px-4 py-2 border-b">
                        Solana ir Ethereum konkrents, kas izveidots ar misiju samazināt darījumu izmaksas un palielināt ātrumu, lai izpildītu dažāda tipa automātiskos līgumus. Pielietojums līdzīgs kā Ethereum kriptovalūtai.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">TRON (TRX)</td>
                      <td className="px-4 py-2 border-b">€28.8B</td>
                      <td className="px-4 py-2 border-b">
                        Vēl viena decentralizētā datora kriptovalūtas tehnoloģija. Tā tiek izmantota vienas no populārākās stablecoin (par to vēlāk) norēķinu sistēmai. Tāpat TRX ir īpašnieks BitTorrent failu apmaiņas progammai un TRX tiek izmantota lojalitātes veicināšanai BitTorrent lietotājiem. Plaši izmantota kriptovalūta Āzijā.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Dogecoin (DOGE)</td>
                      <td className="px-4 py-2 border-b">€27.6B</td>
                      <td className="px-4 py-2 border-b">
                        Sācies kā joks, kas pārtapis par sociālo mediju mikromaksājumu (digitālo dzermnaudu) rīku, piemēram, Reddit, Twitch un Discord platformās. Meme kultūras pārstāvis ar dažiem praktiskiem e-komercijas pielietojumiem.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Cardano (ADA)</td>
                      <td className="px-4 py-2 border-b">€23.5B</td>
                      <td className="px-4 py-2 border-b">
                        Arī kriptovalūta ar decentralizēta datora pielietojumu, kas specializējas uz papildus darījumu pārbaudi/auditu pirms to izpildes. Galvenie lietotāji mēdz būt valsts un izglītības institūcijas.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Hyperliquid (HYPE)</td>
                      <td className="px-4 py-2 border-b">€11.6B</td>
                      <td className="px-4 py-2 border-b">
                        Uz finanšu pasauli specializēta kriptovalūta, ko izmanto dažādu finanšu instrumentu tirdzniecības darījumu veikšanai.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b font-medium">Stellar (XLM)</td>
                      <td className="px-4 py-2 border-b">€11.1B</td>
                      <td className="px-4 py-2 border-b">
                        Līdzīgi kā XRP, piedāvā maksājumu infrastruktūra individuāliem lietotājiem un uzņēmumiem. Piedāvā ātrus, lētus pārskaitījumus dažādās valūtās, optimizējot finanšu transakcijas un nodrošinot likviditāti digitālajā ekonomikā. Līdzīgi kā Tron tā tiek arī izmantota vienas no populārākās stablecoin (par to vēlāk) norēķinu sistēmai. Tehnoloģiju izmanto MoneyGram, Visa, Circle un citi vadošie pasaules finanšu uzņēmumi.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="ekosistema" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Kriptovalūtu ekosistēma
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Kriptovalūtu ekosistēmu var sadalīt pāris lielākās kategorijās. Tā Bitcoin var tikt uzskatīts kā digitālais "zelts" un uzkrājumu aktīvs. 
                Memecoin (pa lielam līdzīgi kā spēles Monopols joku nauda) segmentā līderpozīcijas ieņem Dogecoin, ko bieži izmanto kā digitālo dzermnaudu, 
                bet daudzas (daudzas..) citas memecoin neizmanto nekā. Decentralizēto "datoru" jeb augstas veiktspējas un/vai programmējamu kriptoķēžu risinājumus pārstāv 
                Ethereum, Solana, Cardano un Tron, kas nodrošina viedlīgumus, NFT un citus līdzīgus pielietojumus. Maksājumu kategorijā primāri izceļas XRP un Stellar (XLM) 
                ar ātriem un lētiem pārrobežu norēķiniem un izmantošanu stabilo monētu (stablecoin) pārvedumos, kā arī Hyperliquid (HYPE) kā jauna finanšu tirgus infrastruktūra. 
                Savukārt BNB pārstāv ar <span className="font-bold text-primary">konkrētu uzņēmumu (Binance) saistītu lojalitātes žetonu</span>.
              </p>
            </div>
          </div>

          <div id="memecoins" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Memecoins
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Memecoin ir kriptovalūta, kuras pamatā bieži vien ir joks, "mīms" vai popkultūras tēma, nevis nopietns pielietojuma mērķis vai tehnoloģiska inovācija. 
                Slavenākais piemērs ir Dogecoin - to 2013. gadā izveidoja programmētāji Bilijs Markus un Džaksons Palmers kā joku projektu, iedvesmojoties no Shiba Inu suņa mīma "Doge". 
                Par spīti nenopietnam kriptovalūtas mērķim, Dogecoin kļuva populārs, pateicoties aktīvai sekotāju kopienai. Patreiz šo kriptovalūtu aktīvi lieto kā virtuālo dzeramnaudu, 
                piemēram, Reddit platformā. Savukārt nesen Doge ieguva papildus popularitātes devu, jo šādu pašu akronīmu izmantoja Elons Masks, 
                izveidojot vadības efektivizācijas departamentu ASV (joks uz joka).
              </p>
              
              <p className="text-foreground leading-relaxed mb-4">
                Vēl ir daudz citu memecoinu, kas bieži vien strauji uzplaiksnī un var tikpat strauji pazūd, jo to vērtību lielā mērā nosaka spēja piesaistīt uzmanību ("pavilkt" kopienu). 
                Memecoin pasaulē savu pirkstu ir pielikuši arī sabiedrībā pazīstami cilvēki – 2025. gada sākumā Donalds Tramps izlaida oficiālo $TRUMP memecoin, 
                savukārt Melania Trampa piedāvāja savu $MELANIA versiju. Abas šīs virtuālās valūtas sākotnēji piedzīvoja strauju vērtības pieaugumu, tomēr, pēc tam arī strauju kritumu. 
                <span className="font-bold text-primary"> $MELANIA cena dažu mēnešu laikā no augstākā punkta ir nokritusi par vairāk kā 98%</span>.
              </p>
              
                  <img
                src={TopCryptoChart}
                alt="Top 10 kriptovalūtas pēc tirgus vērtības"
                className="w-full max-h-96 object-contain rounded-lg my-8"
              />

              <p className="text-foreground leading-relaxed mb-4">
                Ir virkne platformu (piemēram, Pump.fun), kas piedāvā jebkuram bez jebkādām tehniskām zināšanām izveidot savu memecoin un diemžēl pietiekoši daudzi to ir izdarījuši. 
                Pašlaik populārākie un ilgāku laiku popularitātes vilnī pagrozījušies memecoin ir Dogecoin, Shiba Inu un Pepe Coin. Tomēr svarīgi atcerēties – 
                <span className="font-bold text-primary">galvenie (un parasti vienīgie), kas nopelna no memecoin ir agrīnie investori vai projekta izveidotāji</span>, 
                bet lielākā daļa sekotāju, īpaši vēlākā stadijā, riskē pat pilnībā zaudēt savus līdzekļus, jo memecoin vērtība balstās tikai uz īslaicīgu sabiedrības uzmanību nevis kādu praktisku šīs kriptovalūtas pielietojumu.
              </p>
            </div>
          </div>

          <div id="stablecoins" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Stablecoins - stabilās kriptovalūtas
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Stabilās kriptovalūtas jeb stablecoins ir kriptovalūtas, kuru vērtība ir piesaistīta tradicionālajām valūtām, piemēram, ASV dolāram vai eiro. 
                Šādu monētu galvenais mērķis ir nodrošināt cenu stabilitāti un sniegt kriptogrāfijas tehnoloģiju priekšrocības ikdienas norēķinu valūtām. 
                Katrs izlaistais stablecoins ir ar <span className="font-bold text-primary">viens pret viens segumu savā pamata valūtā</span> (dolāros vai eiro), 
                kuru kriptovalūtas izlaidējs tur īstermiņa valsts vērtspapīru vai depozītu formā.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Stablecoins viens no galvenajiem pielietojumiem ir ātri, lēti un droši pārrobežu pārskaitījumi. Salīdzinājumā ar tradicionāliem starptautiskajiem banku pārskaitījumiem SWIFT sistēmā, 
                kas nereti izmaksā no 30 līdz 100 eiro, stablecoin pārskaitījums aizņem dažas sekundes vai minūtes un maksā zem 1 EUR. 
                Pie tam, <span className="font-bold text-primary">stablecoin pārvedumus var veikt jebkurā diennakts laikā</span>, tajā skaitā brīvdienās.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Rezultātā stablecoin ir guvis plašu popularitāti, piemēram, ārvalstu viestrādniekiem pārsūtot naudas līzekļus ģimenēm. Savukārt uzņēmumi ir sākuši ar vien biežāk izmantot stablecoin 
                starpvalstu pārskaitījumiem, piemēram, norēķinos ar piegādātājiem vai darbiniekiem. Valstīs ar nestabilu vietējo valūtu vai ierobežotu banku pakalpojumu pieejamību (piemēram, Filipīnās), 
                stablecoin tiek izmantoti arī ikdienas norēķiniem un pārvedumiem, aizvietojot tradicionālo banku sistēmas. Tāpat stablecoin var izmantot, lai pelnītu līdzīgi kā ar banku depozītiem. 
                Pie tam par stablecoin piedāvātiem noguldījumiem likmes ir salīdzinoši augstākas (2025. gada augustā - 4-5% gadā gan USD gan EUR stablecoin) un ir iespēja šos depozītus pārtraukt pāris minūšu laikā. 
                Stablecoins var izmantot arī tie, kam ir īpaša nepatika pret naudas rezervju turēšanu tradicionālos bankas kontos.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                2025. gadā ASV pieņēma regulējumu attiecībā uz stablecoin valūtu izveidošanu, tajā skaitā nosakot prasības saistībā ar šo valūtu seguma rezervju uzturēšanu un izsekojamību. 
                Šāds regulējums ir nostādījis stablecoin <span className="font-bold text-primary">juridiski līdzvērtīgas klasiskai naudai ASV finanšu sistēmā</span>. Rezultātā, virkne ar starptautiskām finanšu kompānijām ir uzsākušas savu stablecoin piedāvāšanu. 
                To skaitā var izcelt Circle (viena no pasaulē lielākajiem finanšu tehnoloģiju uzņēmumiem) un MetaMask (populāra kriptovalūtu maciņa izveidotājs).
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Pasaulē visplašāk izmantotās stabilās kriptovalūtas ir piesietas ASV dolāram (USDT, USDC, USDe), kas ir saistīts ar dolāra dominanci starptautisko norēķinu darījumos. 
                Starp citu, arī Donalda Trampa uzņēmums ir izlaidis savu dolāra stabelcoin - USD1.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Lai gan Eiropa arī ir izveidojusi savu vienotu kriptovalūtu regulējumu (MiCA), ir tikai pāris stablecoin, kuras ir piesietas eiro, piemēram EURC un EURI. 
                Rezultātā, šo stabilo kriptovalūtu tirgus daļa starptautiskajos maksājumos ir ļoti neliela. Tā kā ar eiro piesaistītie stablecoin nav īpaši populāri, 
                tos ir sarežģīti iegādāties, jo ne visas kriptovalūtu biržas vēlas tos piedāvāt.
              </p>
            </div>
          </div>

          <div id="kadas-izveleties" className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">
              Kādās kriptovalūtās ieguldīt
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Praktiskākais sākumpunkts kriptovalūtu ieguldījumiem ir <span className="font-bold text-primary">Bitcoin</span>. Šis digitālais zelts ir visplašāk pieejams, 
                visilgāko vēsturi, salīdzinoši zemu cenas svārstību un skaidru regulējumu. Ne velti Bitcoin veido vairāk kā 70% no kopējā kriptovalūtu aktīvu tirgus. 
                Kad esi izveidojis savu ieguldījumu portfeli Bitcoin, nākamais loģiskais solis (ja vēlies) ir turpināt ar <span className="font-bold text-primary">Ethereum jeb ETH</span>, 
                kas papildus piedāvā arī iespēju pelnīt digitālās dividendes no stakinga.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Tālākais (bet jau daudz platāks solis) ir ieguldījumu portfeļa paplašināšana ar citām kriptovalūtām, piemēram iegādājoties Top 10 saraksta valūtas. 
                Tomēr ir būtiski apzināties, ka daudzas no šīm kriptovalūtām ir vēl salīdzinoši jaunas un ar nepierādītu pielietojumu kopējā ekosistēmā. 
                Tas nozīmē <span className="font-bold text-primary">nozīmīgi augstāku risku</span> nekā ieguldījumi Bitcoin vai Ethereum.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                Savukārt <span className="font-bold text-primary">memecoins ir segments, kas paredzēts tikai izklaidei un spekulācijām</span>, nevis nopietnam ieguldījumam. 
                Tapēc mēs neieteiktu nevienam šīs kategorijas kriptovalūtas apsvērt savam ieguldījumu portfelim. Stablecoins var būt ļoti noderīgas tiem, kas regulāri strādā ar starptautiskiem pārskaitījumiem 
                vai kas īpaši baidās no naudas glabāšanas tradicionālā bankas kontā. Pērkot stablecoin gan nevajag sagaidīt šīs valūtas vērtības pieaugumu, 
                jo to vērtība ir stingri piesieta pie dolāra vai eiro cenas.
              </p>
            </div>
          </div>
        </section>

        <SubscriptionBox />
        <Footer />
      </div>
    </BjorkLayout>
  );
};

export default KadasKriptovalutas;
