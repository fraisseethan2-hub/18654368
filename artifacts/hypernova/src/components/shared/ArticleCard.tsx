import React from "react";
import { Link } from "wouter";
import { Clock, ChevronRight } from "lucide-react";
import { Article, CATEGORY_COLORS, DIFFICULTY_COLORS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: Article;
  className?: string;
  featured?: boolean;
}

export function ArticleCard({ article, className, featured = false }: ArticleCardProps) {
  const categoryColor = CATEGORY_COLORS[article.category] || "bg-gray-100 text-gray-700";
  const difficultyColor = article.difficulty ? DIFFICULTY_COLORS[article.difficulty] : "";
  const imageUrl = article.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop";

  return (
    <div 
      className={cn(
        "group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300",
        featured ? "md:grid md:grid-cols-3 md:items-stretch" : "",
        className
      )}
      data-testid={`article-card-${article.slug}`}
    >
      <div 
        className={cn(
          "relative overflow-hidden shrink-0",
          featured ? "md:col-span-2 aspect-video md:aspect-auto" : "w-full aspect-video"
        )}
      >
        <img 
          src={imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Badge className={cn("border-none shadow-sm font-semibold", categoryColor)}>
            {article.category}
          </Badge>
          {article.difficulty && (
            <Badge className={cn("border-none shadow-sm font-semibold", difficultyColor)}>
              {article.difficulty}
            </Badge>
          )}
        </div>
      </div>
      
      <div className={cn(
        "flex flex-col flex-1 p-5",
        featured ? "md:p-8" : ""
      )}>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
          <span>Rédaction HyperNova</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime} min
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>
            {new Date(article.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' })}
          </span>
        </div>
        
        <Link href={`/article/${article.slug}`} className="block group/link">
          <h3 className={cn(
            "font-bold text-gray-900 mb-3 group-hover/link:text-indigo-600 transition-colors",
            featured ? "text-2xl md:text-3xl" : "text-lg"
          )}>
            {article.title}
          </h3>
        </Link>
        
        <p className={cn(
          "text-gray-500 line-clamp-3 mb-4",
          featured ? "text-base md:text-lg lg:line-clamp-4" : "text-sm"
        )}>
          {article.excerpt}
        </p>
        
        <div className="mt-auto pt-4">
          <Link href={`/article/${article.slug}`} className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn">
            Lire la suite <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
