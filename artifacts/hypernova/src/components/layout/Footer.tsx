import React from "react";
import { Link } from "wouter";
import { Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const Logo = ({ white = false }) => (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-lg">HN</span>
      </div>
      <div className="flex flex-col">
        <span className={cn("text-xl font-bold leading-none", white ? "text-white" : "text-gray-900")}>
          HyperNova
        </span>
        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">
          Learning Institute
        </span>
      </div>
    </Link>
  );

  return (
    <footer className="bg-[#0b0f1a] text-white mt-20" data-testid="main-footer">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Logo & Description */}
          <div className="space-y-6">
            <Logo white />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Votre référence pour des tutoriels, guides et actualités tech de qualité. Apprenez, maîtrisez, évoluez.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Mail className="w-5 h-5 text-indigo-500" />
              <a href="mailto:contact@hypernovalearninginstitute.org" className="hover:text-white transition-colors">
                contact@hypernovalearninginstitute.org
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Accueil</Link></li>
              <li><Link href="/actualites" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Actualités</Link></li>
              <li><Link href="/tutoriels" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Tutoriels & Guides</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</Link></li>
              <li><Link href="/plan-du-site" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Plan du site</Link></li>
            </ul>
          </div>

          {/* Col 3: Légal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Politique de confidentialité</Link></li>
              <li><Link href="/politique-de-cookies" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Politique de cookies</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Recevez chaque semaine des tutoriels et astuces tech directement dans votre boîte mail.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white text-gray-900 px-4 py-2 rounded-l-lg w-full focus:outline-none text-sm"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors group">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <div className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} HyperNova Learning Institute. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Plateforme éducative tech francophone
          </div>
        </div>
      </div>
    </footer>
  );
}
