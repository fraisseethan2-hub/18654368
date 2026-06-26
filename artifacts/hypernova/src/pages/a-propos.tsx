import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { BookOpen, ShieldCheck, Target, Users } from "lucide-react";

export default function APropos() {
  return (
    <Layout>
      <SEOHead 
        title="À propos"
        description="Découvrez la mission, les valeurs et l'équipe derrière HyperNova Learning Institute."
        canonicalUrl="https://hypernovalearninginstitute.org/a-propos"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6 text-center">
          À propos d'HyperNova
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16 leading-relaxed">
          Nous croyons que la technologie doit être un outil d'émancipation, pas une source de frustration.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Notre Mission</h2>
          <p>
            HyperNova Learning Institute est né d'un constat simple : l'informatique évolue à une vitesse fulgurante, laissant de nombreux utilisateurs perplexes face à des interfaces complexes et des enjeux de sécurité cruciaux. Notre mission est de démocratiser le savoir technique francophone, en proposant des tutoriels clairs, rigoureux et accessibles à tous, du débutant à l'utilisateur avancé.
          </p>
          <p>
            Nous voulons être l'alternative moderne et épurée aux forums surchargés, en offrant une lecture apaisée où l'information prime sur la distraction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Indépendance</h3>
              <p className="text-muted-foreground">Nos guides sont rédigés en toute objectivité. Nous ne sommes affiliés à aucun constructeur ou éditeur de logiciels.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Pédagogie</h3>
              <p className="text-muted-foreground">Chaque article est pensé pour être compris sans jargon inutile, avec des étapes illustrées et vérifiées.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Sécurité "Privacy First"</h3>
              <p className="text-muted-foreground">Nous défendons la protection des données personnelles et mettons en avant les solutions respectueuses de la vie privée.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Communauté</h3>
              <p className="text-muted-foreground">Notre ligne éditoriale évolue en fonction des retours et des besoins réels des utilisateurs francophones.</p>
            </div>
          </div>

          <h2>Notre ligne éditoriale</h2>
          <p>
            Contrairement à la course au clic qui caractérise de nombreux médias numériques, nous privilégions la qualité à la quantité. Un guide publié sur HyperNova est testé, éprouvé et mis à jour régulièrement. Nous assumons le choix de proposer des textes longs et détaillés, car la maîtrise d'un outil ne se résume pas à un résumé de 30 secondes.
          </p>

          <h2>L'équipe</h2>
          <p>
            Derrière HyperNova se trouve un collectif de passionnés de technologies, d'anciens administrateurs systèmes, de développeurs et de rédacteurs qui partagent une vision commune : celle d'un web libre, sécurisé et compréhensible. 
          </p>
        </div>
      </div>
    </Layout>
  );
}
