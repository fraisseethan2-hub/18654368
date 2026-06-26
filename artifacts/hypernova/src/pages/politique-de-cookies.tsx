import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Check, ShieldAlert } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function PolitiqueCookies() {
  const [consentAll, setConsentAll] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hnl_cookie_consent");
    if (consent === "all") {
      setConsentAll(true);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("hnl_cookie_consent", consentAll ? "all" : "essential");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Layout>
      <SEOHead 
        title="Politique de cookies"
        description="Gestion des cookies et traceurs sur HyperNova Learning Institute."
        canonicalUrl="https://hypernovalearninginstitute.org/politique-de-cookies"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl font-black text-foreground tracking-tight mb-6">
          Politique et Gestion des Cookies
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            Lors de la consultation de notre site HyperNova Learning Institute, des cookies sont déposés sur votre ordinateur, votre mobile ou votre tablette. Cette page vous permet de mieux comprendre comment fonctionnent les cookies et comment utiliser les outils actuels afin de les paramétrer.
          </p>

          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site ou de la consultation d'une publicité. Ils ont notamment pour but de collecter des informations relatives à votre navigation sur les sites et de vous adresser des services personnalisés.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm mb-12">
          <div className="p-6 md:p-8 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground m-0">Gérez vos préférences</h2>
            </div>
            <p className="text-muted-foreground m-0">Vous pouvez activer ou désactiver les cookies non essentiels ci-dessous.</p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="flex items-start justify-between gap-4 pb-8 border-b border-border">
              <div>
                <Label className="text-lg font-bold text-foreground">Cookies strictement nécessaires</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Ces cookies sont indispensables au bon fonctionnement du site (sauvegarde de vos choix de consentement, mémorisation du thème sombre/clair). Ils ne peuvent pas être désactivés.
                </p>
              </div>
              <div className="flex items-center shrink-0">
                <Switch checked={true} disabled />
                <span className="ml-2 text-sm font-medium text-muted-foreground">Toujours actif</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <Label htmlFor="cookie-analytics" className="text-lg font-bold text-foreground cursor-pointer">Cookies analytiques & publicitaires</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Ces cookies nous permettent de mesurer l'audience du site (Google Analytics) et de vous proposer des publicités pertinentes pour financer notre contenu gratuit (Google AdSense).
                </p>
              </div>
              <div className="flex items-center shrink-0">
                <Switch 
                  id="cookie-analytics" 
                  checked={consentAll} 
                  onCheckedChange={setConsentAll} 
                />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 border-t border-border bg-muted/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              {saved && <span className="flex items-center text-green-600"><Check className="w-4 h-4 mr-1" /> Préférences enregistrées</span>}
            </div>
            <Button onClick={handleSave} size="lg" className="w-full sm:w-auto">
              Enregistrer mes choix
            </Button>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Bloquer les cookies via votre navigateur</h2>
          <p>
            Outre le panneau de gestion ci-dessus, vous pouvez à tout moment choisir de désactiver ces cookies en paramétrant votre navigateur web. Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous demander de les accepter ou non.
          </p>
          <p>
            La configuration de chaque navigateur est différente. Elle est décrite dans le menu d'aide de votre navigateur, qui vous permettra de savoir de quelle manière modifier vos souhaits en matière de cookies.
          </p>
        </div>
      </div>
    </Layout>
  );
}
