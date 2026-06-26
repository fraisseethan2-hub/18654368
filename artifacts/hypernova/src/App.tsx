import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Actualites from "@/pages/actualites";
import Tutoriels from "@/pages/tutoriels";
import ArticlePage from "@/pages/article";
import APropos from "@/pages/a-propos";
import Contact from "@/pages/contact";
import MentionsLegales from "@/pages/mentions-legales";
import PolitiqueConfidentialite from "@/pages/politique-de-confidentialite";
import PolitiqueCookies from "@/pages/politique-de-cookies";
import PlanDuSite from "@/pages/plan-du-site";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/actualites" component={Actualites} />
      <Route path="/tutoriels" component={Tutoriels} />
      <Route path="/article/:slug" component={ArticlePage} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/contact" component={Contact} />
      <Route path="/mentions-legales" component={MentionsLegales} />
      <Route path="/politique-de-confidentialite" component={PolitiqueConfidentialite} />
      <Route path="/politique-de-cookies" component={PolitiqueCookies} />
      <Route path="/plan-du-site" component={PlanDuSite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
