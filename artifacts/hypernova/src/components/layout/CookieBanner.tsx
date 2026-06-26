import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hnl_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hnl_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("hnl_cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)]" data-testid="cookie-banner">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="flex-1 pr-4">
          <p className="text-sm text-foreground">
            Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et afficher des publicités pertinentes. 
            Vous pouvez personnaliser vos choix.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={handleRefuse} data-testid="btn-cookie-refuse">
            Refuser
          </Button>
          <Link href="/politique-de-cookies">
            <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} data-testid="btn-cookie-customize">
              Personnaliser
            </Button>
          </Link>
          <Button size="sm" onClick={handleAccept} className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="btn-cookie-accept">
            Accepter
          </Button>
        </div>
        <button 
          onClick={handleRefuse}
          className="absolute top-2 right-2 md:hidden text-muted-foreground hover:text-foreground"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
