import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index.tsx";
import { DeferredObservability } from "@/components/perf/DeferredObservability";

const SpeedInsightsDashboard = lazy(() => import("./pages/SpeedInsightsDashboard.tsx"));
const QuoteRequestReceivedPage = lazy(() => import("./pages/QuoteRequestReceivedPage.tsx"));
const CustomWebDevPage = lazy(() => import("./pages/services/CustomWebDevPage.tsx"));
const StartupWebsitePage = lazy(() => import("./pages/services/StartupWebsitePage.tsx"));
const Web3DevPage = lazy(() => import("./pages/services/Web3DevPage.tsx"));
const EducationPlatformPage = lazy(() => import("./pages/services/EducationPlatformPage.tsx"));
const ZteesCaseStudy = lazy(() => import("./pages/case-studies/ZteesCaseStudy.tsx"));
const BountyChainsCase = lazy(() => import("./pages/case-studies/BountyChainsCase.tsx"));
const ITMNotesCase = lazy(() => import("./pages/case-studies/ITMNotesCase.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#c8a96e]" />
      <p className="mt-4 text-[#8f8f8f]">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quote-request-received" element={<QuoteRequestReceivedPage />} />
          <Route path="/thank-you" element={<QuoteRequestReceivedPage />} />
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
      </Suspense>
    </BrowserRouter>
    <DeferredObservability />
  </HelmetProvider>
);

export default App;
