export const CATEGORIES = [
  "Android",
  "Windows",
  "Réseaux & Wi-Fi",
  "Sécurité informatique",
  "IA & Automatisation",
  "Astuces & Trucs",
  "Guides débutants",
  "Smartphones",
  "Bureautique",
  "Internet & Web",
  "Comparatifs",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<Category, string> = {
  Android: "bg-green-100 text-green-700",
  Windows: "bg-blue-100 text-blue-700",
  "Réseaux & Wi-Fi": "bg-cyan-100 text-cyan-700",
  "Sécurité informatique": "bg-red-100 text-red-700",
  "IA & Automatisation": "bg-violet-100 text-violet-700",
  "Astuces & Trucs": "bg-orange-100 text-orange-700",
  "Guides débutants": "bg-purple-100 text-purple-700",
  Smartphones: "bg-pink-100 text-pink-700",
  Bureautique: "bg-indigo-100 text-indigo-700",
  "Internet & Web": "bg-teal-100 text-teal-700",
  Comparatifs: "bg-amber-100 text-amber-700",
};

export type ArticleType = "actualite" | "tutoriel";
export type Difficulty = "Débutant" | "Intermédiaire" | "Avancé";

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Débutant: "bg-green-100 text-green-700",
  Intermédiaire: "bg-orange-100 text-orange-700",
  Avancé: "bg-red-100 text-red-700",
};

export interface Article {
  id: string;
  slug: string;
  type: ArticleType;
  title: string;
  excerpt: string;
  category: Category;
  readTime: number; // in minutes
  difficulty?: Difficulty; // only for tutorials
  date: string;
  content: string; // full markdown/html content
  image?: string;
}

export const ARTICLES: Article[] = [
  {
    id: "act-ref-1",
    slug: "comment-securiser-reseau-wifi-10-etapes",
    type: "tutoriel",
    title: "Comment sécuriser votre réseau Wi-Fi domestique en 10 étapes",
    excerpt: "Votre réseau Wi-Fi est la porte d'entrée de votre vie numérique. Découvrez les 10 étapes essentielles pour le sécuriser contre les intrusions et protéger vos appareils connectés.",
    category: "Sécurité informatique",
    difficulty: "Débutant",
    readTime: 9,
    date: "2026-06-26T08:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-ref-2",
    slug: "meilleures-applications-android-gratuites-2024",
    type: "tutoriel",
    title: "Les meilleures applications Android gratuites de 2024",
    excerpt: "Notre sélection des applications Android incontournables et gratuites pour la productivité, la sécurité et le divertissement. Testées et approuvées par notre équipe.",
    category: "Android",
    difficulty: "Débutant",
    readTime: 7,
    date: "2026-06-26T09:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-ref-3",
    slug: "creer-chatbot-ia-chatgpt-tutoriel-debutants",
    type: "tutoriel",
    title: "Créer un chatbot IA avec ChatGPT : tutoriel pour débutants",
    excerpt: "Apprenez à créer votre propre chatbot intelligent en utilisant l'API de ChatGPT. Guide pas-à-pas avec exemples et cas d'usage pratiques pour les débutants.",
    category: "IA & Automatisation",
    difficulty: "Intermédiaire",
    readTime: 12,
    date: "2026-06-26T10:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-ref-4",
    slug: "installer-windows-11-sans-puce-tpm-methode-complete",
    type: "tutoriel",
    title: "Comment installer Windows 11 sans puce TPM 2.0 : méthode complète",
    excerpt: "Votre PC ne possède pas de puce TPM 2.0 ? Pas de panique. Guide détaillé pour installer Windows 11 malgré cette restriction, légalement et en toute sécurité.",
    category: "Windows",
    difficulty: "Intermédiaire",
    readTime: 15,
    date: "2026-06-24T08:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-1",
    slug: "android-15-nouveautes",
    type: "actualite",
    title: "Android 15 : toutes les nouveautés à connaître",
    excerpt: "La dernière mise à jour de l'OS mobile de Google apporte des améliorations majeures en termes de sécurité, de gestion de la batterie et d'interface utilisateur. Découvrez ce qui change pour votre smartphone.",
    category: "Android",
    readTime: 3,
    date: "2026-10-15T08:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-2",
    slug: "windows-11-mise-a-jour-gaming",
    type: "actualite",
    title: "Windows 11 : la mise à jour qui change tout pour les PC gaming",
    excerpt: "Microsoft déploie une nouvelle version de Windows 11 optimisée pour le jeu vidéo, avec des temps de chargement réduits et une meilleure gestion des ressources CPU.",
    category: "Windows",
    readTime: 4,
    date: "2026-10-14T09:30:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-3",
    slug: "wifi-7-ce-qu-il-faut-savoir",
    type: "actualite",
    title: "Wi-Fi 7 : ce qu'il faut savoir avant d'upgrader votre routeur",
    excerpt: "La nouvelle norme Wi-Fi promet des débits impressionnants et une latence quasi nulle. Mais avez-vous vraiment besoin de changer votre équipement actuel ?",
    category: "Réseaux & Wi-Fi",
    readTime: 5,
    date: "2026-10-12T14:15:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-4",
    slug: "meilleures-applis-securite-android-2026",
    type: "actualite",
    title: "Les meilleures applis de sécurité pour Android en 2026",
    excerpt: "Face à la recrudescence des malwares mobiles, nous avons testé et sélectionné les applications les plus efficaces pour protéger vos données personnelles sur Android.",
    category: "Sécurité informatique",
    readTime: 4,
    date: "2026-10-10T11:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-5",
    slug: "supprimer-definitivement-donnees-en-ligne",
    type: "actualite",
    title: "Comment supprimer définitivement ses données en ligne",
    excerpt: "Effacer ses traces sur internet est devenu un véritable parcours du combattant. Voici les étapes indispensables pour reprendre le contrôle de votre identité numérique.",
    category: "Sécurité informatique",
    readTime: 6,
    date: "2026-10-08T16:45:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "act-6",
    slug: "comparatif-smartphones-milieu-de-gamme-2026",
    type: "actualite",
    title: "Comparatif : les meilleurs smartphones milieu de gamme en 2026",
    excerpt: "Inutile de dépenser plus de 1000 euros pour avoir un excellent téléphone. Notre sélection des meilleurs rapports qualité-prix de l'année.",
    category: "Smartphones",
    readTime: 7,
    date: "2026-10-05T10:20:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-1",
    slug: "desactiver-demarrage-automatique-applis-android",
    type: "tutoriel",
    title: "Comment désactiver le démarrage automatique des applis sur Android",
    excerpt: "Votre smartphone est lent au démarrage ? Apprenez à identifier et bloquer les applications qui se lancent toutes seules en arrière-plan.",
    category: "Android",
    difficulty: "Débutant",
    readTime: 5,
    date: "2026-09-28T09:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-2",
    slug: "reparer-windows-11-sans-formater",
    type: "tutoriel",
    title: "Réparer Windows 11 sans formater : guide complet",
    excerpt: "Écrans bleus, lenteurs, bugs inexplicables... Avant de procéder à une réinstallation complète, tentez ces méthodes de réparation intégrées à Windows 11.",
    category: "Windows",
    difficulty: "Intermédiaire",
    readTime: 15,
    date: "2026-09-25T14:30:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-3",
    slug: "configurer-vpn-gratuit-android",
    type: "tutoriel",
    title: "Configurer un VPN gratuit sur Android en 10 minutes",
    excerpt: "Protégez votre connexion sur les réseaux Wi-Fi publics en installant un réseau privé virtuel fiable et gratuit. Suivez le guide pas à pas.",
    category: "Sécurité informatique",
    difficulty: "Débutant",
    readTime: 10,
    date: "2026-09-20T11:15:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-4",
    slug: "accelerer-connexion-wifi-astuces",
    type: "tutoriel",
    title: "Accélérer sa connexion Wi-Fi : 10 astuces efficaces",
    excerpt: "Marre des vidéos qui saccadent et des téléchargements interminables ? Optimisez le signal de votre box internet avec ces réglages simples.",
    category: "Réseaux & Wi-Fi",
    difficulty: "Débutant",
    readTime: 8,
    date: "2026-09-15T16:00:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-5",
    slug: "proteger-pc-windows-11-sans-antivirus-payant",
    type: "tutoriel",
    title: "Protéger son PC sous Windows 11 sans antivirus payant",
    excerpt: "Windows Defender est-il suffisant ? Comment bien le configurer et adopter les bonnes pratiques pour éviter les infections sans dépenser un centime.",
    category: "Sécurité informatique",
    difficulty: "Intermédiaire",
    readTime: 12,
    date: "2026-09-10T10:45:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-6",
    slug: "nettoyer-android-liberer-espace",
    type: "tutoriel",
    title: "Nettoyer son Android et libérer de l'espace en 5 étapes",
    excerpt: "Mémoire saturée ? Découvrez comment faire le tri dans vos fichiers, vider le cache des applications et retrouver un espace de stockage confortable.",
    category: "Android",
    difficulty: "Débutant",
    readTime: 7,
    date: "2026-09-05T08:30:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-7",
    slug: "creer-adresse-email-jetable",
    type: "tutoriel",
    title: "Créer une adresse email jetable et sécurisée",
    excerpt: "Évitez le spam et protégez votre véritable adresse email lors de vos inscriptions en ligne grâce aux services d'emails temporaires.",
    category: "Internet & Web",
    difficulty: "Débutant",
    readTime: 5,
    date: "2026-08-28T13:20:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "tut-8",
    slug: "recuperer-fichiers-supprimes-windows",
    type: "tutoriel",
    title: "Récupérer des fichiers supprimés sous Windows",
    excerpt: "Vous avez vidé la corbeille par erreur ? Pas de panique. Voici les meilleurs outils et méthodes pour restaurer vos documents perdus.",
    category: "Windows",
    difficulty: "Intermédiaire",
    readTime: 20,
    date: "2026-08-20T15:10:00Z",
    content: "Contenu complet de l'article...",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80&auto=format&fit=crop"
  },
];
