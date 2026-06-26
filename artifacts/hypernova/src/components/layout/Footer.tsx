import React from "react";
import { Link } from "wouter";
import { CATEGORIES } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20" data-testid="main-footer">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex flex-col group">
              <span className="text-2xl font-black tracking-tight text-primary leading-none">
                HyperNova
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Learning Institute
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le magazine de référence pour comprendre la tech, maîtriser vos outils numériques et sécuriser votre vie en ligne. Des tutoriels clairs, pas à pas.
            </p>
            <a href="mailto:contact@hypernovalearninginstitute.org" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              contact@hypernovalearninginstitute.org
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/actualites" className="text-sm text-muted-foreground hover:text-primary transition-colors">Actualités</Link></li>
              <li><Link href="/tutoriels" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tutoriels & Guides</Link></li>
              <li><Link href="/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Catégories</h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <Link href={`/tutoriels?category=${encodeURIComponent(cat)}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Informations Légales</h4>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/politique-de-cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de cookies</Link></li>
              <li><Link href="/plan-du-site" className="text-sm text-muted-foreground hover:text-primary transition-colors">Plan du site</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} HyperNova Learning Institute — Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground/60">Made with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
