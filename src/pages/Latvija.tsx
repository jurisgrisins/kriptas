import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const Latvija = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Kriptovalūtas Latvijā - nodokļi un regulējums | Kriptas</title>
        <meta name="description" content="Viss par kriptovalūtām Latvijā: nodokļu prasības, likumdošana, regulējums. Uzzini, kā likumīgi ieguldīt un deklarēt kriptovalūtu ienākumus Latvijā." />
        <meta name="keywords" content="kriptovalūtas Latvijā, crypto nodokļi, VID deklarācija, kriptovalūtu likumi, regulējums Latvijā" />
        <link rel="canonical" href="https://kriptas.com/latvija" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6">Ko ņemt vērā Latvijā</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Saturs tiek veidots...
            </p>
          </div>

          <SubscriptionBox />
          <Footer />
        </div>
      </div>
    </BjorkLayout>
  );
};

export default Latvija;
