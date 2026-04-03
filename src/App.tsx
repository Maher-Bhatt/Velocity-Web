import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.tsx";
import SpeedInsightsDashboard from "./pages/SpeedInsightsDashboard.tsx";
import CustomWebDevPage from "./pages/services/CustomWebDevPage.tsx";
import StartupWebsitePage from "./pages/services/StartupWebsitePage.tsx";
import Web3DevPage from "./pages/services/Web3DevPage.tsx";
import EducationPlatformPage from "./pages/services/EducationPlatformPage.tsx";
import ZteesCaseStudy from "./pages/case-studies/ZteesCaseStudy.tsx";
import BountyChainsCase from "./pages/case-studies/BountyChainsCase.tsx";
import ITMNotesCase from "./pages/case-studies/ITMNotesCase.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/speed-insights" element={<SpeedInsightsDashboard />} />
            <Route path="/services/custom-web-development" element={<CustomWebDevPage />} />
            <Route path="/services/startup-website-development" element={<StartupWebsitePage />} />
            <Route path="/services/web3-development" element={<Web3DevPage />} />
            <Route path="/services/education-platform-development" element={<EducationPlatformPage />} />
            <Route path="/case-studies/ztees" element={<ZteesCaseStudy />} />
            <Route path="/case-studies/bountychains" element={<BountyChainsCase />} />
            <Route path="/case-studies/itm-notes" element={<ITMNotesCase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <SpeedInsights />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
