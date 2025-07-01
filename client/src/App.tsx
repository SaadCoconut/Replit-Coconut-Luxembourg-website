import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import ProjectsPage from "@/pages/projects";
import LocalInitiativesPage from "@/pages/local-initiatives";
import ResourcesPage from "@/pages/resources";
import PartnershipsPage from "@/pages/partnerships";
import TeamPage from "@/pages/team";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/:category" component={ProjectsPage} />
        <Route path="/local-initiatives" component={LocalInitiativesPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/partnerships" component={PartnershipsPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-neutral-50 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
