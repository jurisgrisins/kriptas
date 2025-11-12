import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const Principi = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Ieguldījumu principi kriptovalūtās | Kriptas kurss</title>
        <meta name="description" content="Apgūsti ieguldījumu principus kriptovalūtās: portfeļa veidošana, riska pārvaldība, diversifikācija. Praktiski padomi veiksmīgai crypto investēšanai." />
        <meta name="keywords" content="kriptovalūtu ieguldījumi, portfeļa veidošana, riska pārvaldība, investēšanas principi, crypto stratēģija" />
        <link rel="canonical" href="https://kriptas.com/principi" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Ieguldījumu principi</h1>
          
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

export default Principi;
