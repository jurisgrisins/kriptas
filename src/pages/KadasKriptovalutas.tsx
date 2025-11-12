import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { Helmet } from "react-helmet-async";

const KadasKriptovalutas = () => {
  return (
    <BjorkLayout>
      <Helmet>
        <title>Kurās kriptovalūtās ieguldīt 2025 | Bitcoin, Ethereum</title>
        <meta name="description" content="Salīdzini Bitcoin, Ethereum, Solana un citas kriptovalūtas. Uzzini, kurās digitālajās valūtās ieguldīt 2025. gadā. Ekspertu analīze un ieteikumi." />
        <meta name="keywords" content="bitcoin, ethereum, solana, cardano, labākās kriptovalūtas, crypto salīdzinājums, altcoins" />
        <link rel="canonical" href="https://kriptas.com/kuras-kriptovalutas" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Kurās kriptovalūtās ieguldīt</h1>
          
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

export default KadasKriptovalutas;
