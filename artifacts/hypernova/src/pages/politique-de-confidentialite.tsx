import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Link } from "wouter";

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <SEOHead 
        title="Politique de confidentialité"
        description="Politique de confidentialité et protection des données personnelles de HyperNova Learning Institute."
        canonicalUrl="https://hypernovalearninginstitute.org/politique-de-confidentialite"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl font-black text-foreground tracking-tight mb-6">
          Politique de Confidentialité
        </h1>
        <p className="text-muted-foreground mb-10">Dernière mise à jour : Octobre 2026</p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            La protection de vos données personnelles est une priorité pour HyperNova Learning Institute. Cette politique a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données dans le respect du Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h2>1. Données collectées</h2>
          <p>Nous pouvons être amenés à collecter les données suivantes :</p>
          <ul>
            <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, temps passé sur le site.</li>
            <li><strong>Données renseignées :</strong> adresse email (lors de l'inscription à la newsletter), nom et message (lors de l'utilisation du formulaire de contact).</li>
          </ul>

          <h2>2. Utilisation de vos données</h2>
          <p>Les données que nous collectons sont utilisées pour :</p>
          <ul>
            <li>Assurer le bon fonctionnement du site.</li>
            <li>Analyser l'audience et améliorer nos contenus éditoriaux.</li>
            <li>Envoyer notre newsletter hebdomadaire (uniquement si vous y avez explicitement consenti).</li>
            <li>Répondre à vos demandes via le formulaire de contact.</li>
            <li>Afficher des publicités non-intrusives via notre régie publicitaire (AdSense).</li>
          </ul>

          <h2>3. Cookies et traceurs</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience utilisateur et à des fins publicitaires. Pour en savoir plus sur l'utilisation des cookies et comment les configurer, veuillez consulter notre <Link href="/politique-de-cookies" className="text-primary hover:underline">Politique de cookies</Link>.
          </p>

          <h2>4. Publicité (AdSense)</h2>
          <p>
            Nous utilisons Google AdSense pour afficher des publicités. Google, en tant que prestataire tiers, utilise des cookies pour diffuser des annonces en fonction de vos visites antérieures sur notre site ou d'autres pages web. Vous pouvez désactiver l'utilisation de cookies personnalisés en visitant les paramètres des annonces Google.
          </p>

          <h2>5. Vos droits (RGPD)</h2>
          <p>Conformément à la réglementation européenne, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul>
            <li>Droit d'accès et de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter via notre <Link href="/contact" className="text-primary hover:underline">formulaire de contact</Link> ou en envoyant un email à l'adresse : <strong>contact@hypernovalearninginstitute.org</strong>.
          </p>

          <h2>6. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées uniquement pour le temps nécessaire à l'accomplissement de la finalité pour laquelle elles ont été collectées :
          </p>
          <ul>
            <li>Données de formulaire de contact : supprimées 1 an après le traitement de la demande.</li>
            <li>Abonnement newsletter : conservées jusqu'à votre désinscription (lien présent en bas de chaque email).</li>
            <li>Données analytiques : anonymisées et conservées 13 mois maximum.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
