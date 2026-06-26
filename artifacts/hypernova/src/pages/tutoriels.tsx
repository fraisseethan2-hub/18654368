import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Tutoriels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");
  const [, setLocation] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && CATEGORIES.includes(cat as any)) {
      setActiveCategory(cat);
    }
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === "Toutes") {
      setLocation("/tutoriels");
    } else {
      setLocation(`/tutoriels?category=${encodeURIComponent(category)}`);
    }
  };

  const tutoriels = ARTICLES.filter(a => a.type === "tutoriel");
  
  const filteredTutoriels = tutoriels.filter(a => {
    const matchesCategory = activeCategory === "Toutes" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEOHead 
        title="Tutoriels et Guides"
        description="Des guides pas à pas pour maîtriser Windows, Android, la sécurité informatique et bien plus."
        canonicalUrl="https://hypernovalearninginstitute.org/tutoriels"
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">Tutoriels & Guides</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Apprenez à mieux utiliser vos appareils, sécuriser vos données et résoudre vos problèmes informatiques grâce à nos guides pas à pas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher un tutoriel..." 
                className="pl-9 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Catégories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={cn(
                      "w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors",
                      activeCategory === "Toutes" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
                    )}
                    onClick={() => handleCategoryClick("Toutes")}
                  >
                    Toutes les catégories
                  </button>
                </li>
                {CATEGORIES.map(category => (
                  <li key={category}>
                    <button 
                      className={cn(
                        "w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors",
                        activeCategory === category ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
                      )}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-3">
            {filteredTutoriels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTutoriels.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-muted-foreground bg-muted/30 rounded-lg border border-dashed border-border">
                Aucun tutoriel ne correspond à votre recherche.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
