import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Search, Filter, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdSlot } from "@/components/shared/AdSlot";

export default function Tutoriels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");
  const [activeLevel, setActiveLevel] = useState<string>("Tous");
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

  const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
  const tutoriels = ARTICLES.filter(a => a.type === "tutoriel");
  
  const filteredTutoriels = tutoriels.filter(a => {
    const matchesCategory = activeCategory === "Toutes" || a.category === activeCategory;
    const matchesLevel = activeLevel === "Tous" || a.difficulty === activeLevel;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <Layout>
      <SEOHead 
        title="Tutoriels et Guides"
        description="Des guides pas à pas pour maîtriser Windows, Android, la sécurité informatique et bien plus."
        canonicalUrl="https://hypernovalearninginstitute.org/tutoriels"
      />

      {/* Hero Section */}
      <section className="bg-[#0b0f1a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Tutoriels & Guides</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Apprenez à mieux utiliser vos appareils, sécuriser vos données et résoudre vos problèmes informatiques grâce à nos guides pas à pas.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-30 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher un tutoriel..." 
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-gray-400 px-3 uppercase tracking-wider">Catégorie</span>
                <select 
                  className="bg-transparent text-sm font-bold text-gray-900 focus:outline-none cursor-pointer pr-2"
                  value={activeCategory}
                  onChange={(e) => handleCategoryClick(e.target.value)}
                >
                  <option value="Toutes">Toutes</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-gray-400 px-3 uppercase tracking-wider">Niveau</span>
                <select 
                  className="bg-transparent text-sm font-bold text-gray-900 focus:outline-none cursor-pointer pr-2"
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <AdSlot type="banner" className="mb-12" />

        {filteredTutoriels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutoriels.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500 font-medium">Aucun tutoriel ne correspond à votre recherche.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("Toutes"); setActiveLevel("Tous"); }}
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
