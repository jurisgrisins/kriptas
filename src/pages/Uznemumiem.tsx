import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const Uznemumiem = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Kriptovalūtas uzņēmumiem | Kriptas</title>
        <meta name="description" content="Kriptovalūtu risinājumi uzņēmumiem: Bitcoin rezerves, maksājumu akceptēšana, treasury management. Uzzini, kā uzņēmumi var gūt labumu no crypto." />
        <meta name="keywords" content="kriptovalūtas uzņēmumiem, bitcoin uzņēmumiem, crypto maksājumi, treasury management, uzņēmumu rezerves" />
        <link rel="canonical" href="https://kriptas.com/uznemumiem" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Kripotvalūta uzņēmumiem</h1>
          
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

export default Uznemumiem;
