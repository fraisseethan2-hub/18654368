import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Newsletter } from "@/components/shared/Newsletter";
import { AdSlot } from "@/components/shared/AdSlot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const featuredArticle = ARTICLES.find(a => a.type === "actualite") || ARTICLES[0];
  const topArticles = ARTICLES.filter(a => a.id !== featuredArticle.id).slice(0, 3);
  const recentTutorials = ARTICLES.filter(a => a.type === "tutoriel").slice(0, 4);

  return (
    <Layout>
      <SEOHead 
        title="Accueil"
        description="HyperNova Learning Institute : Le magazine de référence pour comprendre la tech, maîtriser vos outils numériques et sécuriser votre vie en ligne."
        canonicalUrl="https://hypernovalearninginstitute.org"
      />

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-16">
        
        {/* HERO SECTION */}
        <section>
          <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
            <h2 className="text-3xl font-black text-foreground tracking-tight">À la une</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ArticleCard article={featuredArticle} featured className="h-full" />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              {topArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <AdSlot type="banner" className="my-8" />

        {/* LATEST TUTORIALS */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <h2 className="text-3xl font-black text-foreground tracking-tight">Derniers Tutoriels</h2>
            <Link href="/tutoriels">
              <Button variant="ghost" className="text-primary font-semibold">
                Tout voir <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {recentTutorials.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* NEWSLETTER & CATEGORIES */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">Explorer par catégorie</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CATEGORIES.map(category => (
                <Link key={category} href={`/tutoriels?category=${encodeURIComponent(category)}`}>
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group flex items-center justify-between">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{category}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1 sticky top-24">
            <Newsletter variant="card" />
          </div>
        </section>

      </div>
    </Layout>
  );
}
