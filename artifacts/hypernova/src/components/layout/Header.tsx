import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Moon, Sun, User, LogOut, ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { ARTICLES, CATEGORY_COLORS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useUser, useClerk, Show } from "@clerk/react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function UserMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const initials =
    user?.firstName?.[0] ??
    user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() ??
    "U";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
        data-testid="button-user-menu"
      >
        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
          {initials}
        </div>
        <span className="hidden sm:block max-w-[100px] truncate text-foreground">
          {user?.firstName ?? "Mon compte"}
        </span>
        <ChevronDown className={cn("w-3.5 h-3.5 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-semibold text-foreground truncate">
              {user?.fullName ?? user?.firstName ?? "Utilisateur"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
          <div className="p-1">
            <Link href="/mon-compte">
              <button
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setOpen(false)}
                data-testid="link-mon-compte"
              >
                <User className="w-4 h-4 text-muted-foreground" />
                Mon compte
              </button>
            </Link>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-md transition-colors"
              onClick={() => { setOpen(false); signOut({ redirectUrl: basePath || "/" }); }}
              data-testid="button-sign-out-menu"
            >
              <LogOut className="w-4 h-4" />
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults =
    searchQuery.length > 2
      ? ARTICLES.filter(
          (a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.category.toLowerCase().includes(searchQuery.toLowerCase()),
        ).slice(0, 5)
      : [];

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/actualites", label: "Actualités" },
    { href: "/tutoriels", label: "Tutoriels" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const Logo = ({ white = false }) => (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-lg">HN</span>
      </div>
      <div className="flex flex-col">
        <span className={cn("text-xl font-bold leading-none", white ? "text-white" : "text-gray-900")}>
          HyperNova
        </span>
        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
          Learning Institute
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b bg-white",
        isScrolled ? "py-2 shadow-sm" : "py-4",
      )}
      data-testid="main-header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  location === link.href
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn("text-gray-500 hover:text-indigo-600", isSearchOpen && "bg-gray-100")}
                aria-label="Rechercher"
                data-testid="button-search"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </Button>

              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 md:w-96 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-3 border-b border-gray-100">
                    <Input
                      autoFocus
                      placeholder="Rechercher un tutoriel, un guide..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-50 border-none h-10"
                      data-testid="input-search"
                    />
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {searchQuery.length > 2 ? (
                      searchResults.length > 0 ? (
                        <div className="p-2 space-y-1">
                          {searchResults.map((article) => (
                            <Link key={article.id} href={`/article/${article.slug}`}>
                              <div className="block p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer" data-testid={`search-result-${article.id}`}>
                                <div className="flex items-center justify-between mb-1">
                                  <Badge className={cn("text-[10px] py-0 border-none font-bold", CATEGORY_COLORS[article.category])}>
                                    {article.category}
                                  </Badge>
                                </div>
                                <h4 className="text-sm font-bold text-gray-900 line-clamp-1">
                                  {article.title}
                                </h4>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-sm text-gray-500">
                          Aucun résultat pour "{searchQuery}"
                        </div>
                      )
                    ) : (
                      <div className="p-6 text-center text-sm text-gray-500">
                        Tapez au moins 3 caractères pour rechercher
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/tutoriels" className="hidden sm:block">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 font-bold" data-testid="button-explore">
                Explorer les guides
              </Button>
            </Link>

            {/* Auth — desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Show when="signed-out">
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="text-gray-600 font-semibold" data-testid="button-sign-in">
                    Connexion
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-900 font-semibold" data-testid="button-sign-up">
                    Créer un compte
                  </Button>
                </Link>
              </Show>
              <Show when="signed-in">
                <UserMenu />
              </Show>
            </div>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col animate-in slide-in-from-right-full duration-300">
          <div className="flex items-center justify-between p-4 border-b">
            <Logo />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} data-testid="button-close-mobile-menu">
              <X className="w-6 h-6" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block p-4 text-lg font-bold rounded-xl transition-colors",
                  location === link.href
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-900 hover:bg-gray-50",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link href="/tutoriels">
                <Button className="w-full bg-indigo-600 text-white font-bold h-12 rounded-xl">
                  Explorer les guides
                </Button>
              </Link>
              <Show when="signed-out">
                <Link href="/sign-in">
                  <Button variant="ghost" className="w-full font-bold h-12 text-gray-600">
                    Connexion
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="outline" className="w-full font-bold h-12 border-gray-200">
                    Créer un compte
                  </Button>
                </Link>
              </Show>
              <Show when="signed-in">
                <Link href="/mon-compte">
                  <Button variant="outline" className="w-full font-bold h-12 border-gray-200 text-gray-900">
                    Mon compte
                  </Button>
                </Link>
              </Show>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
