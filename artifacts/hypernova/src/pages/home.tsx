import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { AdSlot } from "@/components/shared/AdSlot";
import { Search, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const featuredArticle = ARTICLES.find(a => a.slug === "comment-securiser-reseau-wifi-10-etapes") || ARTICLES[0];
  const sideArticles = ARTICLES.filter(a => a.id !== featuredArticle.id).slice(0, 2);
  const recentTutorials = ARTICLES.filter(a => a.type === "tutoriel").slice(0, 3);
  const trendingNews = ARTICLES.filter(a => a.type === "actualite").slice(0, 3);

  const heroPills = [
    "Windows 11", "Android 15", "IA Gratuite", "VPN", "Cybersécurité", "Wi-Fi", "Productivité"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Accueil"
        description="HyperNova Learning Institute : Le magazine de référence pour comprendre la tech, maîtriser vos outils numériques et sécuriser votre vie en ligne."
        canonicalUrl="https://hypernovalearninginstitute.org"
      />

      {/* HERO SECTION */}
      <section className="bg-[#0b0f1a] relative overflow-hidden py-24 md:py-32">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="text-sm">✦</span> Plateforme éducative tech francophone
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 max-w-4xl leading-tight">
            Que voulez-vous maîtriser aujourd'hui ?
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Tutoriels détaillés, guides pas-à-pas et actualités tech. Apprenez à votre rythme avec des contenus clairs et gratuits.
          </p>
          
          <div className="w-full max-w-2xl relative mb-8">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher un tutoriel, un guide..."
              className="w-full bg-white text-gray-900 py-5 pl-14 pr-6 rounded-2xl shadow-2xl focus:outline-none text-lg font-medium"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {heroPills.map(pill => (
              <Link key={pill} href={`/tutoriels?q=${encodeURIComponent(pill)}`}>
                <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white transition-all text-sm font-semibold cursor-pointer">
                  {pill}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        
        {/* À LA UNE SECTION */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">À la une</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ArticleCard article={featuredArticle} featured className="h-full" />
            </div>
            <div className="flex flex-col gap-8">
              {sideArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <AdSlot type="banner" className="my-8" />

        {/* LATEST TUTORIALS */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Derniers Tutoriels</h2>
            <Link href="/tutoriels" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1 group">
              Tout voir <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentTutorials.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* LATEST NEWS */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Actualités Récentes</h2>
            <Link href="/actualites" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1 group">
              Toute l'actualité <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingNews.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}
