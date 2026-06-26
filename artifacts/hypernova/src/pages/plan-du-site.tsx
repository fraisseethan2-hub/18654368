import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Link } from "wouter";
import { ARTICLES, CATEGORIES } from "@/lib/data";

export default function PlanDuSite() {
  const actualites = ARTICLES.filter(a => a.type === "actualite");
  const tutoriels = ARTICLES.filter(a => a.type === "tutoriel");

  return (
    <Layout>
      <SEOHead 
        title="Plan du site"
        description="Plan complet du site HyperNova Learning Institute pour faciliter votre navigation."
        canonicalUrl="https://hypernovalearninginstitute.org/plan-du-site"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-5xl">
        <h1 className="text-4xl font-black text-foreground tracking-tight mb-10">
          Plan du site
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Pages principales</h2>
            <ul className="space-y-3 list-disc list-inside pl-4 marker:text-primary">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-lg">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors text-lg">À propos</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-lg">Contact</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b border-border">Informations légales</h2>
            <ul className="space-y-3 list-disc list-inside pl-4 marker:text-primary">
              <li><Link href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/politique-de-cookies" className="text-muted-foreground hover:text-primary transition-colors">Politique de cookies</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b border-border">Catégories</h2>
            <ul className="space-y-3 list-disc list-inside pl-4 marker:text-primary">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <Link href={`/tutoriels?category=${encodeURIComponent(cat)}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
              <Link href="/actualites" className="hover:text-primary transition-colors">Actualités</Link>
            </h2>
            <ul className="space-y-3 list-disc list-inside pl-4 marker:text-muted-foreground/50">
              {actualites.map(article => (
                <li key={article.id}>
                  <Link href={`/article/${article.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b border-border">
              <Link href="/tutoriels" className="hover:text-primary transition-colors">Tutoriels & Guides</Link>
            </h2>
            <ul className="space-y-3 list-disc list-inside pl-4 marker:text-muted-foreground/50">
              {tutoriels.map(article => (
                <li key={article.id}>
                  <Link href={`/article/${article.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  );
}
