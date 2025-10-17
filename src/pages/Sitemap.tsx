import { BjorkLayout } from "@/components/BjorkLayout";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Sitemap = () => {
  return (
    <BjorkLayout>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Lapas karte</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium mb-3">Galvenās lapas</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-primary hover:underline">
                      Sākums
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi" className="text-primary hover:underline">
                      Kāpēc ieguldīt kriptovalūtās
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-3">Kursa sadaļas</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/kursi#evolucija" className="text-primary hover:underline">
                      Kriptovalūtu evolūcija
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#diversifikacija" className="text-primary hover:underline">
                      Bitcoin lieliskai diversifikācijai
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#inflacija" className="text-primary hover:underline">
                      Inflācijas aizsardzība
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#likviditate" className="text-primary hover:underline">
                      Likviditāte 24/7
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#kontrole" className="text-primary hover:underline">
                      Pilna kontrole pār ieguldījumu
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#dividendes" className="text-primary hover:underline">
                      Digitālās dividendes
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#atdeves" className="text-primary hover:underline">
                      Nepārspējama vēsturiskā atdeve
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#cenas" className="text-primary hover:underline">
                      Cenas svārstības
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#vertiba" className="text-primary hover:underline">
                      Kas nosaka kriptovalūtu vērtību
                    </Link>
                  </li>
                  <li>
                    <Link to="/kursi#riski" className="text-primary hover:underline">
                      Ieguldījumu riski
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-3">Papildus informācija</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resursi" className="text-primary hover:underline">
                      Papildus resursi
                    </Link>
                  </li>
                  <li>
                    <Link to="/principi" className="text-primary hover:underline">
                      Ieguldījumu principi
                    </Link>
                  </li>
                  <li>
                    <Link to="/uznemumiem" className="text-primary hover:underline">
                      Kriptovalūta uzņēmumiem
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastruktura" className="text-primary hover:underline">
                      Kriptovalūtu infrastruktūra
                    </Link>
                  </li>
                  <li>
                    <Link to="/kuras-kriptovalutas" className="text-primary hover:underline">
                      Kurās kriptovalūtās ieguldīt
                    </Link>
                  </li>
                  <li>
                    <Link to="/latvija" className="text-primary hover:underline">
                      Ko ņemt vērā Latvijā
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-3">Juridiskā informācija</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privatumas-politika" className="text-primary hover:underline">
                      Privātuma politika
                    </Link>
                  </li>
                  <li>
                    <Link to="/lietosanas-noteikumi" className="text-primary hover:underline">
                      Lietošanas noteikumi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-8">
          <Footer />
        </div>
      </div>
    </BjorkLayout>
  );
};

export default Sitemap;
