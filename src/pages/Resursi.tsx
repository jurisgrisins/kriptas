import { BjorkLayout } from "@/components/BjorkLayout";
import { Footer } from "@/components/Footer";
import { SubscriptionBox } from "@/components/SubscriptionBox";

const Resursi = () => {
  return (
    <BjorkLayout>
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
