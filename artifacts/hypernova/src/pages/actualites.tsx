import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdSlot } from "@/components/shared/AdSlot";

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["Tous", "Tutoriels", "Actualités", ...CATEGORIES];
  
  const filteredArticles = ARTICLES.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (activeCategory === "Tutoriels") matchesCategory = a.type === "tutoriel";
    else if (activeCategory === "Actualités") matchesCategory = a.type === "actualite";
    else if (activeCategory !== "Tous") matchesCategory = a.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEOHead 
        title="Actualités & Articles Tech"
        description="Les dernières actualités technologiques, mises à jour logicielles, et nouveautés du numérique."
        canonicalUrl="https://hypernovalearninginstitute.org/actualites"
      />

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">Actualités & Articles</h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Restez informé des dernières évolutions du monde numérique. Analyses, nouveautés et décryptages par nos experts.
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher une actualité, un article..."
                className="w-full bg-white border border-gray-200 py-4 pl-12 pr-6 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border",
                activeCategory === category 
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <AdSlot type="banner" className="mb-12" />

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-xl text-gray-500">Aucun article ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
