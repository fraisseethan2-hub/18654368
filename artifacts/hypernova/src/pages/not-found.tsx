import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Home, FileQuestion } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <Layout>
      <SEOHead 
        title="Page non trouvée"
        description="La page que vous recherchez n'existe pas sur HyperNova Learning Institute."
      />

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-8 border-4 border-background shadow-xl">
          <FileQuestion className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-7xl font-black text-foreground tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Page introuvable</h2>
        
        <p className="text-lg text-muted-foreground max-w-md mb-10">
          Le lien que vous avez suivi est peut-être rompu, ou la page a été supprimée. 
          Ne vous inquiétez pas, vous pouvez utiliser la recherche ci-dessous ou retourner à l'accueil.
        </p>

        <div className="w-full max-w-md mb-10 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Rechercher sur le site..." className="pl-9 h-12 bg-background border-border" />
          </div>
          <Button className="h-12">Chercher</Button>
        </div>

        <Link href="/">
          <Button variant="outline" size="lg" className="gap-2 font-medium">
            <Home className="w-4 h-4" /> Retour à l'accueil
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
