import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const Resursi = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Kriptovalūtu resursi un rīki | Kriptas</title>
        <meta name="description" content="Noderīgi resursi kriptovalūtu investoriem: biržas, maki, analītikas rīki, izglītības materiāli. Uzzini par labākajiem crypto resursiem latviski." />
        <meta name="keywords" content="kriptovalūtu biržas, crypto maki, blockchain rīki, kriptovalūtu ziņas, investīciju resursi" />
        <link rel="canonical" href="https://kriptas.com/resursi" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Papildus resursi</h1>
          
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

export default Resursi;
