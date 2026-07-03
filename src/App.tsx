import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SecurityProvider from "@/components/SecurityProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SectionRoutes = () => (
  <>
    <Route path="/" element={<Portfolio />} />
    <Route path="/profile" element={<Portfolio />} />
    <Route path="/education" element={<Portfolio />} />
    <Route path="/professional-development" element={<Portfolio />} />
    <Route path="/experience" element={<Portfolio />} />
    <Route path="/certificates" element={<Portfolio />} />
    <Route path="/skills" element={<Portfolio />} />
    <Route path="/family" element={<Portfolio />} />
    <Route path="/contact" element={<Portfolio />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <SecurityProvider>
        <TooltipProvider>
          <Toaster position="top-center" />
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Portfolio />} />
                  <Route path="/profile" element={<Portfolio />} />
                  <Route path="/education" element={<Portfolio />} />
                  <Route path="/professional-development" element={<Portfolio />} />
                  <Route path="/experience" element={<Portfolio />} />
                  <Route path="/certificates" element={<Portfolio />} />
                  <Route path="/skills" element={<Portfolio />} />
                  <Route path="/family" element={<Portfolio />} />
                  <Route path="/contact" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
              <ScrollToTopButton />
              <Chatbot />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </SecurityProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
