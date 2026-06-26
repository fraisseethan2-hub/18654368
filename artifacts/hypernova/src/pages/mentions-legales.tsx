import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";

export default function MentionsLegales() {
  return (
    <Layout>
      <SEOHead 
        title="Mentions légales"
        description="Mentions légales et informations éditoriales du site HyperNova Learning Institute."
        canonicalUrl="https://hypernovalearninginstitute.org/mentions-legales"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl font-black text-foreground tracking-tight mb-10">
          Mentions Légales
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>HyperNova Learning Institute</strong> (accessible à l'adresse hypernovalearninginstitute.org) est édité par l'association (fictive) HyperNova Media.
          </p>
          <ul>
            <li><strong>Siège social :</strong> 123 Avenue de l'Innovation, 75001 Paris, France</li>
            <li><strong>Email de contact :</strong> contact@hypernovalearninginstitute.org</li>
            <li><strong>Directeur de la publication :</strong> Jean Dupont</li>
          </ul>

          <h2>2. Hébergement</h2>
          <p>
            L'hébergement du site est assuré par la société Replit, Inc.
          </p>
          <ul>
            <li><strong>Adresse :</strong> San Francisco, CA, USA</li>
            <li><strong>Site web :</strong> replit.com</li>
          </ul>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, images, architectures, éléments graphiques) présents sur le site sont la propriété exclusive d'HyperNova Learning Institute, sauf mention contraire explicite. 
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
          </p>
          <p>
            Les marques et logos cités sur ce site sont déposés par les sociétés qui en sont propriétaires.
          </p>

          <h2>4. Limitation de responsabilité</h2>
          <p>
            HyperNova Learning Institute s'efforce de fournir sur le site des informations aussi précises que possible concernant le domaine de la technologie. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Les tutoriels et guides sont fournis à titre indicatif. L'utilisateur est seul responsable de l'usage qu'il fait des informations présentes sur le site. HyperNova ne saurait être tenu pour responsable de tout dommage direct ou indirect résultant de l'utilisation de ces informations (perte de données, dysfonctionnement matériel, etc.).
          </p>

          <h2>5. Liens hypertextes</h2>
          <p>
            Le site HyperNova Learning Institute contient un certain nombre de liens hypertextes vers d'autres sites. Cependant, HyperNova n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
          </p>
        </div>
      </div>
    </Layout>
  );
}
