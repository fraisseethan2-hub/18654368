import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Button } from "@/components/ui/button";

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");
  const actualites = ARTICLES.filter(a => a.type === "actualite");
  
  const filteredActualites = activeCategory === "Toutes" 
    ? actualites 
    : actualites.filter(a => a.category === activeCategory);

  return (
    <Layout>
      <SEOHead 
        title="Actualités Tech"
        description="Les dernières actualités technologiques, mises à jour logicielles, et nouveautés du numérique."
        canonicalUrl="https://hypernovalearninginstitute.org/actualites"
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">Actualités</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Restez informé des dernières évolutions du monde numérique. Analyses, nouveautés et décryptages.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <Button 
            variant={activeCategory === "Toutes" ? "default" : "outline"}
            onClick={() => setActiveCategory("Toutes")}
            className="rounded-full"
          >
            Toutes
          </Button>
          {CATEGORIES.map(category => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredActualites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActualites.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground bg-muted/30 rounded-lg border border-dashed border-border">
            Aucune actualité trouvée pour cette catégorie.
          </div>
        )}
      </div>
    </Layout>
  );
}
