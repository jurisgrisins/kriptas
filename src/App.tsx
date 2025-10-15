import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Kursi from "./pages/Kursi";
import KadasKriptovalutas from "./pages/KadasKriptovalutas";
import Infrastruktura from "./pages/Infrastruktura";
import Principi from "./pages/Principi";
import Latvija from "./pages/Latvija";
import Uznemumiem from "./pages/Uznemumiem";
import Resursi from "./pages/Resursi";
import PrivatumasPolitika from "./pages/PrivatumasPolitika";
import LietosanasNoteikumi from "./pages/LietosanasNoteikumi";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kursi" element={<Kursi />} />
          <Route path="/kuras-kriptovalutas" element={<KadasKriptovalutas />} />
          <Route path="/infrastruktura" element={<Infrastruktura />} />
          <Route path="/principi" element={<Principi />} />
          <Route path="/latvija" element={<Latvija />} />
          <Route path="/uznemumiem" element={<Uznemumiem />} />
          <Route path="/resursi" element={<Resursi />} />
          <Route path="/privatumas-politika" element={<PrivatumasPolitika />} />
          <Route path="/lietosanas-noteikumi" element={<LietosanasNoteikumi />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
