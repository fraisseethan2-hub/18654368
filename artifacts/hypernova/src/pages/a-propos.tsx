import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/hooks/use-seo";
import { Target, Award, Rocket, BookOpen, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function APropos() {
  const stats = [
    { label: "Guides publiés", value: "100+", icon: BookOpen },
    { label: "Experts tech", value: "10", icon: Users },
    { label: "Croissance annuelle", value: "150%", icon: Rocket },
    { label: "Catégories", value: "11", icon: Target },
  ];

  return (
    <Layout>
      <SEOHead 
        title="À propos"
        description="Découvrez la mission, les valeurs et l'équipe derrière HyperNova Learning Institute."
        canonicalUrl="https://hypernovalearninginstitute.org/a-propos"
      />

      {/* Hero Section */}
      <section className="bg-[#0b0f1a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">À propos de HyperNova</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Votre référence pour des tutoriels, guides et actualités tech de qualité. Apprenez, maîtrisez, évoluez avec nous.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-20 space-y-24">
        
        {/* Notre Mission */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Notre mission</h2>
          </div>
          
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-8 md:p-12 leading-relaxed text-lg text-gray-700 space-y-6">
            <p>
              HyperNova Learning Institute est né d'un constat simple : l'informatique évolue à une vitesse fulgurante, laissant de nombreux utilisateurs perplexes face à des interfaces complexes et des enjeux de sécurité cruciaux.
            </p>
            <p className="font-bold text-gray-900">
              Notre mission est de démocratiser le savoir technique francophone, en proposant des tutoriels clairs, rigoureux et accessibles à tous.
            </p>
            <p>
              Nous croyons que la technologie doit être un outil d'émancipation, pas une source de frustration. C'est pourquoi chaque contenu est vérifié, testé et mis à jour régulièrement par notre équipe de passionnés.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                <div className="text-4xl font-black text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Nos Valeurs */}
        <section>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Nos valeurs fondamentales</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Clarté & Pédagogie</h3>
              <p className="text-gray-500 leading-relaxed">
                Nous bannissons le jargon inutile. Nos guides sont écrits pour être compris, avec des étapes visuelles et des explications concrètes accessibles au plus grand nombre.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Rigueur & Mise à jour</h3>
              <p className="text-gray-500 leading-relaxed">
                La tech change, nous aussi. Nous maintenons nos tutoriels à jour pour qu'ils restent pertinents même des mois après leur publication originale.
              </p>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
