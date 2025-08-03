import { Button } from "@/components/ui/button";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Building, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Uznemumiem = () => {
  return (
    <BjorkLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">
            Korporatīvās apmācības
          </h1>
          <p className="text-xl text-foreground leading-relaxed mb-8">
            Atklājiet, kā mūsu apmācību programmas palīdz izveidot efektīvu kriptovūtu portfeli un izmantot kriptovalūtas kā norēķinu līdzekli ikdienas maksājumos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="default" size="lg">
              Pieteikties konsultācijai
            </Button>
          
          </div>
          <img
  src="/src/assets/kursi-background.jpg"
  alt="Kursu ilustrācija"
  className="w-full max-h-64 object-cover rounded-lg mb-8"
/>
        </section>

 {/* Services Preview */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Pielāgotas apmācības uzņēmumiem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Kriptovalūtu ieguldījumi
                </h3>
                <p className="text-foreground leading-relaxed">
                 Piedāvājam apmācības uzņēmumiem par efektīvas kriptovalūtu kases (“treasury”) izveidi un pārvaldību
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background border border-border rounded-lg p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Kriptovalūtu maksājumi
                </h3>
                <p className="text-foreground leading-relaxed">
                  Mācam, kā izveidot un izmantot kriptovalūtu norēķinu sistēmas starptautiskiem maksājumiem
                </p>
              </div>
            </div>
          </div>
        </section>
        
      

        {/* Case Studies */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Sadarbībā ar
          </h2>
          
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  Baltijas Banka
                </h3>
                <p className="text-sm text-primary">Finanšu sektors</p>
              </div>
              <p className="text-muted-foreground text-sm">
                "Kriptas palīdzēja mums droši ienākt kriptovalūtu tirgū ar profesionālu 
                risku pārvaldību un regulējumu atbilstību."
              </p>
            </div>
            
      
        </section>

        {/* Contact */}
        <section className="mb-24">
          <div className="border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Gatavi Sadarbībai?
            </h2>
            <p className="text-muted-foreground mb-6">
              Pievienojieties institucionālajiem investoriem, kas uzticas mums 
              savu digitālo aktīvu portfeļu pārvaldībā.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Pieteikties konsultācijai
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
    </BjorkLayout>
  );
};

export default Uznemumiem;
