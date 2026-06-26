import React from "react";
import { Link } from "wouter";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import { Article, CATEGORY_COLORS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: Article;
  className?: string;
  featured?: boolean;
}

export function ArticleCard({ article, className, featured = false }: ArticleCardProps) {
  const gradientClass = CATEGORY_COLORS[article.category] || "from-gray-400 to-gray-600";

  return (
    <div 
      className={cn(
        "group flex flex-col bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300",
        featured ? "md:flex-row md:items-stretch" : "",
        className
      )}
      data-testid={`article-card-${article.slug}`}
    >
      <div 
        className={cn(
          "relative overflow-hidden shrink-0",
          featured ? "w-full md:w-2/5 lg:w-1/2 aspect-video md:aspect-auto" : "w-full aspect-video"
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-105 transition-transform duration-500", gradientClass)} />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-12 h-12 text-white/40" />
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-white/90 text-primary hover:bg-white border-none shadow-sm backdrop-blur-sm">
            {article.category}
          </Badge>
          {article.difficulty && (
            <Badge variant="secondary" className="bg-black/50 text-white hover:bg-black/60 border-none backdrop-blur-sm">
              {article.difficulty}
            </Badge>
          )}
        </div>
      </div>
      
      <div className={cn(
        "flex flex-col flex-1 p-5",
        featured ? "justify-center md:p-8" : ""
      )}>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
          {article.type === "actualite" ? "Actualité" : "Tutoriel"}
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime} min
          </span>
        </div>
        
        <Link href={`/article/${article.slug}`} className="block group/link">
          <h3 className={cn(
            "font-bold text-foreground mb-3 line-clamp-2 group-hover/link:text-primary transition-colors",
            featured ? "text-2xl md:text-3xl line-clamp-3" : "text-lg"
          )}>
            {article.title}
          </h3>
        </Link>
        
        <p className={cn(
          "text-muted-foreground line-clamp-3",
          featured ? "text-base mb-6" : "text-sm mb-4"
        )}>
          {article.excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
          <span className="text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          <Link href={`/article/${article.slug}`} className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group/btn">
            Lire la suite <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
