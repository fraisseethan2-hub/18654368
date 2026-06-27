import { useEffect, useRef } from "react";
import { ClerkProvider, SignIn, SignUp, useClerk } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { shadcn } from "@clerk/themes";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
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
import MonCompte from "@/pages/mon-compte";

const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#1a1f5e",
    colorForeground: "#0f1225",
    colorMutedForeground: "#6b7888",
    colorDanger: "#ef4444",
    colorBackground: "#fafaf8",
    colorInput: "#e8ecf5",
    colorInputForeground: "#0f1225",
    colorNeutral: "#6b7888",
    fontFamily: "Inter, sans-serif",
    borderRadius: "0.3rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "bg-white rounded-xl w-[440px] max-w-full overflow-hidden shadow-lg border border-gray-200",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-gray-900 font-bold",
    headerSubtitle: "text-gray-500",
    socialButtonsBlockButtonText: "text-gray-700 font-medium",
    formFieldLabel: "text-gray-700 font-medium",
    footerActionLink: "text-[#1a1f5e] hover:text-[#2563eb] font-medium",
    footerActionText: "text-gray-500",
    dividerText: "text-gray-400",
    identityPreviewEditButton: "text-[#2563eb]",
    formFieldSuccessText: "text-green-600",
    alertText: "text-red-700",
    logoBox: "mb-2",
    logoImage: "h-10",
    socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50",
    formButtonPrimary: "bg-[#1a1f5e] hover:bg-[#161a52] text-white font-semibold",
    formFieldInput: "border-gray-300 bg-white text-gray-900",
    footerAction: "bg-gray-50",
    dividerLine: "bg-gray-200",
    alert: "bg-red-50 border-red-200",
    otpCodeFieldInput: "border-gray-300",
    formFieldRow: "gap-3",
    main: "gap-4",
  },
};

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`} />
    </div>
  );
}

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
      <Route path="/mon-compte" component={MonCompte} />
      <Route path="/sign-in/*?" component={SignInPage} />
      <Route path="/sign-up/*?" component={SignUpPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: {
          start: {
            title: "Connexion",
            subtitle: "Connectez-vous à votre compte HyperNova",
          },
        },
        signUp: {
          start: {
            title: "Créer un compte",
            subtitle: "Rejoignez la communauté HyperNova",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
