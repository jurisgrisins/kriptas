import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Kursi from "./pages/Kursi";
import Uznemumiem from "./pages/Uznemumiem";
import ParMums from "./pages/ParMums";
import PrivatumasPolitika from "./pages/PrivatumasPolitika";
import LietosanasNoteikumi from "./pages/LietosanasNoteikumi";
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
          <Route path="/uznemumiem" element={<Uznemumiem />} />
          <Route path="/par-mums" element={<ParMums />} />
          <Route path="/privatumas-politika" element={<PrivatumasPolitika />} />
          <Route path="/lietosanas-noteikumi" element={<LietosanasNoteikumi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
