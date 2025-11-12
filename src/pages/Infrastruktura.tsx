import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const Infrastruktura = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Kriptovalūtu infrastruktūra | Kriptas kurss</title>
        <meta name="description" content="Uzzini par kriptovalūtu infrastruktūru: blokķēdēm, makiem, biržām un drošības aspektiem. Praktiska informācija kriptovalūtu glabāšanai un darījumu veikšanai." />
        <meta name="keywords" content="kriptovalūtu infrastruktūra, blokķēde, crypto maki, kriptovalūtu biržas, blockchain tehnoloģija" />
        <link rel="canonical" href="https://kriptas.com/infrastruktura" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Kriptovalūtu infrastruktūra</h1>
          
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

export default Infrastruktura;
