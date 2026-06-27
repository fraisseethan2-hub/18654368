import { useUser, useClerk, Show } from "@clerk/react";
import { Link, Redirect } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Calendar, ArrowRight, BookOpen, Newspaper } from "lucide-react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function AccountContent() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-foreground mb-2" data-testid="heading-mon-compte">
        Mon compte
      </h1>
      <p className="text-muted-foreground mb-10">
        Gérez vos informations personnelles et vos préférences.
      </p>

      {/* Profile card */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6 flex items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {user?.firstName?.[0] ?? user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() ?? "U"}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-foreground" data-testid="text-user-name">
            {user?.fullName ?? "Utilisateur"}
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <Mail className="w-4 h-4 shrink-0" />
            <span className="truncate" data-testid="text-user-email">
              {user?.primaryEmailAddress?.emailAddress ?? "—"}
            </span>
          </div>
          {joinDate && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Membre depuis le {joinDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <Link href="/tutoriels">
          <div
            className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 hover:bg-muted/30 transition-colors cursor-pointer group"
            data-testid="link-tutoriels-compte"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Tutoriels</p>
              <p className="text-sm text-muted-foreground">Parcourir nos guides</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
          </div>
        </Link>
        <Link href="/actualites">
          <div
            className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 hover:bg-muted/30 transition-colors cursor-pointer group"
            data-testid="link-actualites-compte"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <Newspaper className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Actualités</p>
              <p className="text-sm text-muted-foreground">Dernières infos tech</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-secondary transition-colors" />
          </div>
        </Link>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="text-destructive border-destructive/30 hover:bg-destructive/5 hover:border-destructive"
          onClick={() => signOut({ redirectUrl: basePath || "/" })}
          data-testid="button-sign-out"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Se déconnecter
        </Button>
      </div>
    </div>
  );
}

export default function MonCompte() {
  return (
    <Layout>
      <Show when="signed-in">
        <AccountContent />
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </Layout>
  );
}
