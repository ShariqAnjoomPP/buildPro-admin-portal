import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { RegistrationFlow } from "./components/registration/RegistrationFlow";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

// Helper to check token validity
function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  try {
    const decoded: { exp?: number } = jwtDecode(token);
    if (!decoded.exp) return false;
    // exp is in seconds, Date.now() is ms
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

// Token validation wrapper
function AuthWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    // Exclude /login and /register from auth check
    const isAuthExcluded = location.pathname === "/register";
    if (!isAuthExcluded && !isTokenValid(token)) {
      navigate("/login");
    }
  }, [navigate, location]);

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<RegistrationFlow />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
