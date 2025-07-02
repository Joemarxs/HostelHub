import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HostelProvider } from "./contexts/HostelContext";
import Index from "./pages/Index";
import Hostels from "./pages/Hostels"; 
import HostelDetails from "./pages/HostelDetails";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/StudentDashboard";
import LandlordDashboard from "./pages/LandlordDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostHostel from "./pages/PostHostel";
import Premium from "./pages/Premium";
import HowItWorks from "./pages/HowItWorks";
import Support from "./pages/Support";
import HelpCenter from "./pages/HelpCenter";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HostelProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hostels" element={<Hostels />} />
              <Route path="/hostel/:id" element={<HostelDetails />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/register" element={<Auth />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post-hostel" element={<PostHostel />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/support" element={<Support />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/community-guidelines" element={<CommunityGuidelines />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HostelProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
