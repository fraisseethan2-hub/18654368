import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { ARTICLES, CATEGORY_COLORS } from "@/lib/data";
import NotFound from "./not-found";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User, ChevronRight, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdSlot } from "@/components/shared/AdSlot";
import { Newsletter } from "@/components/shared/Newsletter";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  const gradientClass = CATEGORY_COLORS[article.category] || "from-gray-400 to-gray-600";
  const relatedArticles = ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "datePublished": article.date,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "HyperNova Learning Institute"
    }
  };

  return (
    <Layout>
      <SEOHead 
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`https://hypernovalearninginstitute.org/article/${article.slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      {/* Progress Bar (Simulated) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
        <div className="h-full bg-primary w-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link href={article.type === "actualite" ? "/actualites" : "/tutoriels"} className="hover:text-primary transition-colors">
            {article.type === "actualite" ? "Actualités" : "Tutoriels"}
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-md">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">{article.category}</Badge>
                {article.difficulty && (
                  <Badge variant="outline">{article.difficulty}</Badge>
                )}
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" /> {article.readTime} min de lecture
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight mb-6">
                {article.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Rédaction HyperNova</p>
                    <p className="text-xs text-muted-foreground">Équipe technique</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Mise à jour le {new Date(article.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </header>

            {/* Hero Image / Gradient Placeholder */}
            <div className={cn("w-full aspect-[2/1] md:aspect-[21/9] rounded-xl mb-10 opacity-90", gradientClass)}></div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none mb-6 text-foreground/90 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:my-4 [&_ol]:my-4 [&_li]:mb-2 [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_.sommaire]:bg-muted/50 [&_.sommaire]:p-6 [&_.sommaire]:rounded-lg [&_.sommaire]:mb-8 [&_.sommaire]:border [&_.sommaire]:border-border [&_.tip]:bg-blue-50 [&_.tip]:border-l-4 [&_.tip]:border-blue-500 [&_.tip]:p-4 [&_.tip]:my-6 [&_.tip]:rounded-r-lg [&_.warn]:bg-orange-50 [&_.warn]:border-l-4 [&_.warn]:border-orange-500 [&_.warn]:p-4 [&_.warn]:my-6 [&_.warn]:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <AdSlot type="banner" className="my-10" />

            {/* Author Block */}
            <div className="bg-muted p-8 rounded-xl flex flex-col md:flex-row gap-6 items-center md:items-start mb-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex shrink-0 items-center justify-center">
                <span className="text-3xl font-black text-primary">HN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">HyperNova Learning Institute</h3>
                <p className="text-muted-foreground mb-4">
                  Notre équipe d'experts rédige des guides précis et vérifiés pour vous aider à reprendre le contrôle de votre vie numérique. Indépendants et passionnés.
                </p>
                <Link href="/a-propos" className="text-primary font-medium hover:underline">
                  Découvrir notre ligne éditoriale
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Questions fréquentes</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Cette méthode est-elle réversible ?</AccordionTrigger>
                  <AccordionContent>
                    Oui, l'ensemble des manipulations décrites dans ce guide peuvent être annulées en suivant les mêmes étapes dans l'ordre inverse et en restaurant les paramètres par défaut.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Puis-je appliquer ce tutoriel sur une ancienne version ?</AccordionTrigger>
                  <AccordionContent>
                    Nous recommandons fortement de maintenir vos systèmes à jour. Les menus et options peuvent différer de manière significative sur les versions datant de plus de deux ans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Quels sont les risques pour mes données ?</AccordionTrigger>
                  <AccordionContent>
                    Si vous suivez précisément les étapes et que vous avez effectué une sauvegarde préalable comme conseillé, les risques de perte de données sont quasi nuls.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <Newsletter variant="card" />
            
            <AdSlot type="rectangle" />

            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm border-b border-border pb-2">
                  Articles Liés
                </h3>
                <div className="flex flex-col gap-6">
                  {relatedArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm border-b border-border pb-2">
                Tags Populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Sécurité", "Windows 11", "Optimisation", "Réseau", "RGPD", "Astuce", "Débutant"].map(tag => (
                  <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </Layout>
  );
}
