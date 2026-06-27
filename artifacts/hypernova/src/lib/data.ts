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
  readTime: number;
  difficulty?: Difficulty;
  date: string;
  content: string;
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Pourquoi sécuriser votre Wi-Fi est urgent</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Changer les identifiants par défaut du routeur</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Choisir le bon chiffrement (WPA3)</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Mettre à jour le firmware de votre routeur</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Créer un réseau invité</a></li><li><a href="#s6" style="color:#4f46e5;text-decoration:none;font-weight:500">6. Désactiver le WPS et l'accès à distance</a></li><li><a href="#s7" style="color:#4f46e5;text-decoration:none;font-weight:500">7. Surveiller les appareils connectés</a></li><li><a href="#s8" style="color:#4f46e5;text-decoration:none;font-weight:500">8. Utiliser un DNS sécurisé</a></li><li><a href="#s9" style="color:#4f46e5;text-decoration:none;font-weight:500">9. Activer le pare-feu du routeur</a></li><li><a href="#s10" style="color:#4f46e5;text-decoration:none;font-weight:500">10. Bonnes pratiques quotidiennes</a></li></ul></div>

<h2 id="s1">1. Pourquoi sécuriser votre Wi-Fi est urgent</h2>
<p>En France, on estime que près de 30 % des réseaux Wi-Fi domestiques présentent des vulnérabilités exploitables. Un réseau mal sécurisé permet à n'importe qui dans un rayon de 50 mètres de s'y connecter, d'intercepter vos données, voire d'utiliser votre connexion pour des activités illégales dont vous seriez tenu responsable.</p>
<p>Les risques concrets sont nombreux : vol de mots de passe, espionnage des conversations, accès à vos fichiers partagés, détournement de votre bande passante ou installation de malwares sur vos appareils. Bonne nouvelle : se protéger ne prend que 30 minutes.</p>

<h2 id="s2">2. Changer les identifiants par défaut du routeur</h2>
<p>La première erreur de la majorité des utilisateurs : ne jamais changer les identifiants d'administration du routeur. Les mots de passe par défaut (admin/admin, admin/1234) sont publiquement référencés sur internet.</p>
<ol>
<li>Connectez-vous à l'interface d'administration de votre routeur en tapant <strong>192.168.1.1</strong> ou <strong>192.168.0.1</strong> dans votre navigateur.</li>
<li>Identifiez-vous avec les codes par défaut (indiqués sous le routeur ou dans la notice).</li>
<li>Rendez-vous dans <strong>Administration &gt; Mot de passe</strong> et définissez un nouveau mot de passe de 16 caractères minimum, mêlant majuscules, chiffres et symboles.</li>
<li>Changez également le nom de votre réseau (SSID) : évitez tout nom indiquant votre adresse, votre nom ou votre opérateur.</li>
</ol>
<div class="tip"><strong>💡 Conseil :</strong> Utilisez un gestionnaire de mots de passe comme Bitwarden pour ne pas oublier ces nouveaux identifiants.</div>

<h2 id="s3">3. Choisir le bon chiffrement (WPA3)</h2>
<p>Le protocole de chiffrement détermine la robustesse de votre réseau. En 2026, voici la hiérarchie à retenir :</p>
<ul>
<li><strong>WPA3</strong> — Le gold standard actuel. Résistant aux attaques par dictionnaire. À activer si votre routeur le supporte.</li>
<li><strong>WPA2-AES</strong> — Acceptable si votre matériel ne supporte pas WPA3.</li>
<li><strong>WPA/WEP</strong> — À bannir absolument. Ces protocoles sont cassés depuis des années.</li>
</ul>
<p>Pour vérifier et modifier votre chiffrement, allez dans <strong>Paramètres Wi-Fi &gt; Sécurité</strong> dans l'interface de votre routeur. Si WPA3 n'est pas disponible, une mise à jour du firmware peut l'activer.</p>

<h2 id="s4">4. Mettre à jour le firmware de votre routeur</h2>
<p>Le firmware est le système d'exploitation de votre routeur. Des failles de sécurité critiques sont découvertes régulièrement — et les fabricants publient des correctifs. Si votre firmware date de plus d'un an, vous êtes probablement vulnérable.</p>
<ol>
<li>Dans l'interface d'administration, cherchez <strong>Mise à jour du firmware</strong> ou <strong>Firmware Update</strong>.</li>
<li>Cliquez sur "Vérifier les mises à jour". Si votre routeur ne le fait pas automatiquement, téléchargez le dernier firmware sur le site du fabricant.</li>
<li>Appliquez la mise à jour et attendez le redémarrage complet (ne coupez pas l'alimentation pendant la mise à jour).</li>
</ol>

<h2 id="s5">5. Créer un réseau invité</h2>
<p>Quand des amis ou la famille se connectent chez vous, ils apportent leurs appareils potentiellement infectés. Un réseau invité les isole totalement de votre réseau principal, protégeant ainsi vos PC, NAS et autres appareils sensibles.</p>
<p>Activez cette option dans <strong>Wi-Fi &gt; Réseau invité</strong>. Définissez un mot de passe différent et, si possible, activez l'option "Isolation client" qui empêche les appareils invités de se voir entre eux.</p>

<h2 id="s6">6. Désactiver le WPS et l'accès à distance</h2>
<p>Le <strong>WPS (Wi-Fi Protected Setup)</strong> est une fonctionnalité commode mais notoirement vulnérable. Des attaques permettent de le casser en quelques heures. Désactivez-le immédiatement dans les paramètres de votre routeur.</p>
<p>De même, l'accès à distance (gestion du routeur depuis internet) n'est nécessaire que dans de rares cas professionnels. Désactivez-le si vous ne savez pas à quoi il sert.</p>
<div class="warn"><strong>⚠️ Attention :</strong> Certains opérateurs français activent l'accès à distance pour la maintenance. Vérifiez les conditions de votre contrat avant de le désactiver complètement.</div>

<h2 id="s7">7. Surveiller les appareils connectés</h2>
<p>Consultez régulièrement la liste des appareils connectés à votre réseau. Tout appareil inconnu doit vous alerter. Dans l'interface d'administration, cherchez <strong>Appareils connectés</strong> ou <strong>DHCP Clients</strong>.</p>
<p>L'application <strong>Fing</strong> (gratuite sur Android et iOS) vous donne une vue claire de tous les appareils sur votre réseau et peut vous alerter lors d'une nouvelle connexion.</p>

<h2 id="s8">8. Utiliser un DNS sécurisé</h2>
<p>Par défaut, votre routeur utilise les serveurs DNS de votre opérateur — des serveurs qui ne filtrent pas les sites malveillants. Changez pour des DNS sécurisés :</p>
<ul>
<li><strong>Cloudflare (1.1.1.2 / 1.0.0.2)</strong> — DNS avec filtrage malware</li>
<li><strong>NextDNS</strong> — Filtrage personnalisable, logs consultables</li>
<li><strong>Quad9 (9.9.9.9)</strong> — Bloque automatiquement les domaines malveillants</li>
</ul>

<h2 id="s9">9. Activer le pare-feu du routeur</h2>
<p>La plupart des routeurs intègrent un pare-feu (firewall) capable de bloquer les tentatives d'intrusion depuis internet. Vérifiez qu'il est bien activé dans <strong>Sécurité &gt; Pare-feu</strong>. Activez également la protection contre les attaques DoS si l'option est disponible.</p>

<h2 id="s10">10. Bonnes pratiques quotidiennes</h2>
<p>La sécurité n'est pas un état permanent mais un processus continu. Adoptez ces réflexes :</p>
<ul>
<li>Changez votre mot de passe Wi-Fi tous les 6 mois</li>
<li>Éteignez votre routeur la nuit et lors de longues absences</li>
<li>Vérifiez la liste des appareils connectés une fois par mois</li>
<li>Mettez à jour le firmware dès qu'une mise à jour est disponible</li>
<li>Évitez de donner votre mot de passe Wi-Fi à des personnes de passage</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Productivité et organisation</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Sécurité et confidentialité</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Photo et créativité</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Navigation et transport</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Utilitaires indispensables</a></li></ul></div>

<h2 id="s1">1. Productivité et organisation</h2>
<p>Ces applications transforment votre téléphone en véritable assistant personnel, sans dépenser un centime.</p>
<ul>
<li><strong>Notion (gratuit)</strong> — Prise de notes, gestion de projet, bases de données. La version gratuite couvre largement les besoins personnels. Synchronisation multi-appareils incluse.</li>
<li><strong>Todoist (gratuit)</strong> — Gestionnaire de tâches élégant avec rappels intelligents. La version gratuite permet jusqu'à 5 projets actifs.</li>
<li><strong>Google Keep</strong> — Notes rapides, listes de courses, rappels géolocalisés. Simple mais redoutablement efficace et synchronisé avec Google Drive.</li>
<li><strong>Microsoft To Do</strong> — Intégration parfaite avec Outlook et Office 365. La liste "Ma journée" aide à se concentrer sur l'essentiel.</li>
</ul>

<h2 id="s2">2. Sécurité et confidentialité</h2>
<p>La sécurité mobile ne devrait pas coûter cher. Ces applications gratuites font le travail sérieusement.</p>
<ul>
<li><strong>Bitwarden</strong> — Le meilleur gestionnaire de mots de passe gratuit du marché. Open source, audité, synchronisé sur tous vos appareils. Génère des mots de passe robustes automatiquement.</li>
<li><strong>Aegis Authenticator</strong> — Application 2FA (authentification à deux facteurs) open source. Interface claire, sauvegarde chiffrée, aucun compte requis.</li>
<li><strong>ProtonVPN (gratuit)</strong> — VPN sans logs, sans limite de données, serveurs en Suisse, Pays-Bas et États-Unis. Idéal pour les connexions Wi-Fi publiques.</li>
<li><strong>Malwarebytes Mobile</strong> — Analyse de sécurité ponctuelle et détection des applications malveillantes. La version gratuite est amplement suffisante.</li>
</ul>
<div class="tip"><strong>💡 Astuce :</strong> Commencez par Bitwarden. Installer un gestionnaire de mots de passe est la meilleure décision de sécurité que vous puissiez prendre, avant même un antivirus.</div>

<h2 id="s3">3. Photo et créativité</h2>
<p>Des outils professionnels accessibles gratuitement depuis votre smartphone.</p>
<ul>
<li><strong>Snapseed (Google)</strong> — Retouche photo de niveau professionnel. Courbes, sélecteur de points, HDR, suppression d'éléments. L'application photo gratuite la plus puissante du marché.</li>
<li><strong>Lightroom Mobile (gratuit)</strong> — Version mobile d'Adobe Lightroom avec des outils d'édition avancés. Les presets basiques sont accessibles gratuitement.</li>
<li><strong>Canva</strong> — Création graphique accessible à tous. Affiches, présentations, stories Instagram. La version gratuite offre des milliers de modèles.</li>
<li><strong>CapCut</strong> — Montage vidéo sur mobile avec effets, transitions et sous-titres automatiques. Popularisé par TikTok, polyvalent pour tous les usages.</li>
</ul>

<h2 id="s4">4. Navigation et transport</h2>
<ul>
<li><strong>Maps.me</strong> — Cartes offline complètes. Indispensable à l'étranger sans connexion internet. Inclut les sentiers de randonnée et les pistes cyclables.</li>
<li><strong>Waze</strong> — Navigation en temps réel avec alertes radars, embouteillages et dangers signalés par la communauté.</li>
<li><strong>Citymapper</strong> — Transports en commun dans les grandes villes. Calcule le meilleur itinéraire multi-modal (métro, bus, vélo, marche).</li>
</ul>

<h2 id="s5">5. Utilitaires indispensables</h2>
<ul>
<li><strong>Files by Google</strong> — Gestionnaire de fichiers propre avec nettoyage automatique et transfert Bluetooth. Remplace avantageusement les gestionnaires constructeurs.</li>
<li><strong>VLC Media Player</strong> — Lit absolument tous les formats vidéo et audio. Indétrônable depuis 20 ans, gratuit et open source.</li>
<li><strong>Signal</strong> — Messagerie chiffrée de bout en bout. L'alternative privée à WhatsApp recommandée par les experts en cybersécurité.</li>
<li><strong>AdGuard (version gratuite)</strong> — Bloque les publicités dans les applications et le navigateur. Version gratuite avec filtrage basique suffisant pour la majorité des usages.</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Prérequis et création du compte OpenAI</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Obtenir votre clé API</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Votre premier chatbot en Python</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Personnaliser le comportement du bot</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Cas d'usage pratiques</a></li></ul></div>

<h2 id="s1">1. Prérequis et création du compte OpenAI</h2>
<p>Avant de commencer, vous aurez besoin de :</p>
<ul>
<li>Un compte OpenAI (gratuit à la création sur platform.openai.com)</li>
<li>Python 3.8 ou supérieur installé sur votre machine</li>
<li>Connaissance basique de Python (variables, fonctions, boucles)</li>
<li>Un budget minimal : GPT-4o-mini coûte ~0,15$ pour 1 million de tokens — soit plusieurs semaines d'utilisation normale</li>
</ul>
<p>Créez votre compte sur <strong>platform.openai.com</strong>. OpenAI offre quelques dollars de crédits gratuits aux nouveaux comptes, suffisants pour apprendre et tester.</p>

<h2 id="s2">2. Obtenir votre clé API</h2>
<ol>
<li>Connectez-vous sur platform.openai.com</li>
<li>Cliquez sur votre profil en haut à droite &gt; <strong>API keys</strong></li>
<li>Cliquez sur <strong>Create new secret key</strong></li>
<li>Copiez la clé immédiatement — elle ne sera plus affichée après fermeture de la fenêtre</li>
<li>Stockez-la dans une variable d'environnement, jamais directement dans votre code</li>
</ol>
<div class="warn"><strong>⚠️ Sécurité :</strong> Ne partagez jamais votre clé API publiquement. Ne la committez pas sur GitHub. Utilisez un fichier .env et ajoutez-le à votre .gitignore.</div>

<h2 id="s3">3. Votre premier chatbot en Python</h2>
<p>Installez la bibliothèque OpenAI :</p>
<p><code>pip install openai</code></p>
<p>Voici le code minimal d'un chatbot fonctionnel :</p>
<p><code>from openai import OpenAI<br/>import os<br/><br/>client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))<br/><br/>historique = []<br/><br/>def chat(message_utilisateur):<br/>&nbsp;&nbsp;&nbsp;&nbsp;historique.append({"role": "user", "content": message_utilisateur})<br/>&nbsp;&nbsp;&nbsp;&nbsp;reponse = client.chat.completions.create(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model="gpt-4o-mini",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;messages=historique<br/>&nbsp;&nbsp;&nbsp;&nbsp;)<br/>&nbsp;&nbsp;&nbsp;&nbsp;message_bot = reponse.choices[0].message.content<br/>&nbsp;&nbsp;&nbsp;&nbsp;historique.append({"role": "assistant", "content": message_bot})<br/>&nbsp;&nbsp;&nbsp;&nbsp;return message_bot</code></p>
<p>Ce chatbot conserve l'historique de la conversation pour des échanges contextuels.</p>

<h2 id="s4">4. Personnaliser le comportement du bot</h2>
<p>Le paramètre <strong>system message</strong> définit la personnalité et les instructions permanentes de votre bot. C'est là que toute la magie opère :</p>
<p><code>messages = [<br/>&nbsp;&nbsp;&nbsp;&nbsp;{"role": "system", "content": "Tu es un assistant spécialisé en cuisine française. Tu réponds uniquement en français, de manière chaleureuse et précise. Tu proposes toujours des alternatives végétariennes."},<br/>&nbsp;&nbsp;&nbsp;&nbsp;{"role": "user", "content": question}<br/>]</code></p>
<p>Paramètres importants :</p>
<ul>
<li><strong>temperature</strong> (0-2) — Plus bas = réponses plus précises, plus haut = plus créatives. Pour un bot informatif, utilisez 0.3.</li>
<li><strong>max_tokens</strong> — Limite la longueur des réponses pour maîtriser les coûts.</li>
<li><strong>model</strong> — gpt-4o-mini pour l'économie, gpt-4o pour la performance maximale.</li>
</ul>

<h2 id="s5">5. Cas d'usage pratiques</h2>
<p>Avec cette base, vous pouvez construire :</p>
<ul>
<li><strong>Assistant service client</strong> — Bot répondant aux FAQ de votre site, avec escalade vers un humain si nécessaire</li>
<li><strong>Tuteur personnel</strong> — Aide aux devoirs, explications adaptées au niveau de l'élève</li>
<li><strong>Générateur de contenu</strong> — Rédaction d'emails, posts réseaux sociaux, fiches produit</li>
<li><strong>Analyseur de documents</strong> — Résumé automatique de PDF, extraction d'informations clés</li>
<li><strong>Bot de recommandation</strong> — Suggestions personnalisées basées sur les préférences utilisateur</li>
</ul>
<div class="tip"><strong>💡 Prochaine étape :</strong> Pour déployer votre chatbot sur le web, explorez les frameworks comme Streamlit (Python) ou Next.js (JavaScript) avec l'API OpenAI côté serveur.</div>`,
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
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Vérifier la compatibilité de votre PC</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Méthode 1 — Via Rufus (recommandée)</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Méthode 2 — Modification du registre Windows</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Réaliser l'installation propre</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Post-installation et mises à jour</a></li></ul></div>

<h2 id="s1">1. Vérifier la compatibilité de votre PC</h2>
<p>Avant tout, confirmez pourquoi votre PC est bloqué. Windows 11 exige officiellement :</p>
<ul>
<li>Un processeur Intel 8e génération (Coffee Lake) ou AMD Ryzen 2000 ou plus récent</li>
<li>4 Go de RAM minimum (8 Go recommandés)</li>
<li>64 Go d'espace disque</li>
<li>Une puce TPM 2.0 activée</li>
<li>Secure Boot activé</li>
</ul>
<p>Pour vérifier votre TPM : appuyez sur <strong>Win + R</strong>, tapez <strong>tpm.msc</strong> et validez. Si vous voyez "Gestion du module de plateforme sécurisée (TPM) sur l'ordinateur local" avec la version 1.2 ou "Compatible TPM est introuvable", les méthodes ci-dessous s'appliquent à vous.</p>
<div class="tip"><strong>💡 Note :</strong> Certains PC ont un TPM 2.0 mais désactivé dans le BIOS. Vérifiez les options de sécurité de votre BIOS/UEFI avant d'utiliser une méthode de contournement.</div>

<h2 id="s2">2. Méthode 1 — Via Rufus (recommandée)</h2>
<p>Rufus est un outil gratuit et open source qui permet de créer une clé USB bootable avec les restrictions TPM désactivées directement.</p>
<ol>
<li>Téléchargez <strong>Rufus</strong> sur rufus.ie (version portable, aucune installation requise)</li>
<li>Téléchargez l'ISO Windows 11 depuis le <strong>site officiel Microsoft</strong></li>
<li>Branchez une clé USB d'au moins 8 Go (son contenu sera effacé)</li>
<li>Lancez Rufus, sélectionnez votre clé USB et l'ISO Windows 11</li>
<li>Cliquez sur <strong>Démarrer</strong> — une fenêtre de personnalisation apparaît</li>
<li>Cochez <strong>"Supprimer les exigences pour TPM 2.0, Secure Boot et RAM"</strong></li>
<li>Cochez aussi <strong>"Supprimer l'exigence d'un compte Microsoft en ligne"</strong> si vous souhaitez un compte local</li>
<li>Validez et attendez la fin de la création de la clé</li>
</ol>

<h2 id="s3">3. Méthode 2 — Modification du registre Windows</h2>
<p>Si vous souhaitez effectuer une mise à jour en place depuis Windows 10, cette méthode modifie le registre pour contourner la vérification TPM :</p>
<ol>
<li>Ouvrez l'Éditeur de registre : <strong>Win + R</strong> &gt; <code>regedit</code></li>
<li>Naviguez vers <code>HKEY_LOCAL_MACHINE\SYSTEM\Setup\MoSetup</code></li>
<li>Si la clé MoSetup n'existe pas, créez-la</li>
<li>Cliquez droit dans le panneau droit &gt; Nouveau &gt; Valeur DWORD 32 bits</li>
<li>Nommez-la <code>AllowUpgradesWithUnsupportedTPMOrCPU</code></li>
<li>Double-cliquez dessus et définissez la valeur à <code>1</code></li>
<li>Redémarrez votre PC, puis lancez le programme d'installation Windows 11</li>
</ol>
<div class="warn"><strong>⚠️ Attention :</strong> La modification du registre peut causer des problèmes si mal effectuée. Créez un point de restauration système avant de procéder.</div>

<h2 id="s4">4. Réaliser l'installation propre</h2>
<p>Après avoir préparé votre clé USB avec Rufus :</p>
<ol>
<li>Redémarrez votre PC et accédez au menu de démarrage (généralement F11, F12 ou Esc selon le fabricant)</li>
<li>Sélectionnez votre clé USB comme source de démarrage</li>
<li>Suivez l'assistant d'installation Windows 11</li>
<li>Lors du choix du type d'installation, optez pour <strong>"Personnalisée"</strong> pour une installation propre</li>
<li>Sélectionnez la partition où installer Windows (la partition système existante)</li>
</ol>
<p>L'installation dure entre 20 et 40 minutes selon votre matériel.</p>

<h2 id="s5">5. Post-installation et mises à jour</h2>
<p>Bonne nouvelle : une fois Windows 11 installé via ces méthodes, vous recevrez normalement les mises à jour de fonctionnalités. Cependant, Microsoft réserve le droit de cesser les mises à jour sur matériel non supporté à l'avenir.</p>
<ul>
<li>Installez immédiatement les pilotes via Windows Update</li>
<li>Vérifiez que l'activation Windows est valide (elle se transfère depuis Windows 10)</li>
<li>Exécutez l'outil de diagnostic PC Health Check pour évaluer les performances</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Sécurité et confidentialité renforcées</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Gestion améliorée de la batterie</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Nouvelles fonctionnalités d'interface</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. IA intégrée et Google Gemini</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Compatibilité et déploiement</a></li></ul></div>

<h2 id="s1">1. Sécurité et confidentialité renforcées</h2>
<p>Android 15 marque un tournant significatif dans la protection de la vie privée. La nouvelle fonctionnalité <strong>Espace privé</strong> permet de créer une zone chiffrée séparée sur votre téléphone, accessible par un code PIN distinct. Idéal pour compartimenter les applications bancaires ou professionnelles.</p>
<p>Le système de permissions a été entièrement revu : les applications doivent désormais justifier l'accès aux données sensibles lors de chaque session. Les <strong>permissions à usage unique</strong> s'étendent aux contacts, au calendrier et aux fichiers.</p>

<h2 id="s2">2. Gestion améliorée de la batterie</h2>
<p>Le nouveau mode <strong>Santé de la batterie</strong> analyse vos habitudes de charge et optimise automatiquement les cycles pour prolonger la durée de vie de l'accumulateur. Sur les appareils testés, on observe jusqu'à 20% de cycles de charge en moins grâce à la charge adaptative.</p>
<p>Le mode <strong>Ultra économie d'énergie</strong> a été amélioré : il peut désormais maintenir l'appareil actif jusqu'à 72 heures avec 10% de batterie restante en désactivant intelligemment uniquement les services non essentiels.</p>

<h2 id="s3">3. Nouvelles fonctionnalités d'interface</h2>
<p>Android 15 introduit le <strong>mode satellite</strong> en partenariat avec plusieurs opérateurs, permettant d'envoyer des SMS d'urgence sans réseau cellulaire. Cette fonctionnalité sera progressivement déployée selon les pays.</p>
<p>L'écran partagé (split-screen) est désormais accessible via un geste de swipe depuis le bas et mémorise vos paires d'applications favorites. La barre des tâches sur les grands écrans et tablettes est entièrement personnalisable.</p>

<h2 id="s4">4. IA intégrée et Google Gemini</h2>
<p>Google Gemini remplace définitivement Google Assistant comme assistant par défaut. Il peut désormais interagir avec toutes les applications ouvertes, pas seulement les services Google. Exemples concrets :</p>
<ul>
<li>Résumer un email long en 3 points clés</li>
<li>Créer un événement calendrier à partir d'une photo d'affiche</li>
<li>Traduire en temps réel lors d'un appel téléphonique</li>
<li>Décrire le contenu d'une image pour les malvoyants</li>
</ul>

<h2 id="s5">5. Compatibilité et déploiement</h2>
<p>Android 15 est disponible en premier sur les Pixel 6, 7, 8 et 9 (toutes variantes). Samsung déploie sa surcouche One UI 7 basée sur Android 15 pour les Galaxy S23 et supérieurs. Les dates pour Xiaomi, OnePlus et autres fabricants varient selon les modèles.</p>
<div class="tip"><strong>💡 Mise à jour :</strong> Vérifiez la disponibilité dans Paramètres &gt; Système &gt; Mise à jour du système. Si votre appareil n'est pas encore compatible, les correctifs de sécurité Android 15 seront portés sur Android 14 pendant encore 2 ans.</div>`,
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
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. DirectStorage 2.0 : révolution des temps de chargement</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Game Mode étendu</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Auto HDR sur davantage de titres</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Optimisations CPU pour les processeurs hybrides</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Comment activer ces nouvelles fonctionnalités</a></li></ul></div>

<h2 id="s1">1. DirectStorage 2.0 : révolution des temps de chargement</h2>
<p>La version 2.0 de DirectStorage permet aux jeux de charger les assets directement depuis le SSD NVMe vers la VRAM de la carte graphique, court-circuitant totalement le CPU et la RAM. Résultat : les temps de chargement passent de 30-60 secondes à moins de 5 secondes sur les jeux compatibles.</p>
<p>Cette technologie nécessite un SSD NVMe (PCIe 4.0 ou 5.0 recommandé) et une carte graphique DirectX 12 Ultimate. Les développeurs de jeux doivent intégrer l'API — Forza Horizon 6, Starfield Enhanced Edition et plusieurs titres AAA à venir sont déjà compatibles.</p>

<h2 id="s2">2. Game Mode étendu</h2>
<p>Le Game Mode de Windows 11 passe en version améliorée avec la capacité de :</p>
<ul>
<li>Suspendre automatiquement les tâches Windows Update pendant les sessions de jeu</li>
<li>Prioriser les ressources GPU pour le jeu actif, même si d'autres applications tournent</li>
<li>Réduire la latence du sous-système audio jusqu'à 40%</li>
<li>Désactiver temporairement les notifications système (mode Ne pas déranger automatique)</li>
</ul>

<h2 id="s3">3. Auto HDR sur davantage de titres</h2>
<p>La technologie Auto HDR, qui convertit automatiquement les jeux SDR en HDR10+, s'étend maintenant aux jeux DirectX 10 et 11, ouvrant la porte à des milliers de titres supplémentaires de la bibliothèque Steam. La qualité de conversion a été améliorée grâce à un nouveau modèle de machine learning.</p>

<h2 id="s4">4. Optimisations CPU pour les processeurs hybrides</h2>
<p>Windows 11 avait des difficultés à répartir correctement les tâches entre les cœurs performants (P-cores) et efficaces (E-cores) des processeurs Intel 12e+ génération et AMD Ryzen 8000. La nouvelle mise à jour améliore significativement ce scheduling avec un gain moyen de 8-12% de frames par seconde observé dans les benchmarks.</p>

<h2 id="s5">5. Comment activer ces nouvelles fonctionnalités</h2>
<ol>
<li>Mettez à jour Windows 11 via <strong>Paramètres &gt; Windows Update</strong></li>
<li>Activez Game Mode : <strong>Paramètres &gt; Jeux &gt; Mode jeu &gt; Activer</strong></li>
<li>Pour Auto HDR : <strong>Paramètres &gt; Système &gt; Affichage &gt; HDR &gt; Auto HDR</strong> (nécessite un écran HDR)</li>
<li>DirectStorage s'active automatiquement sur les jeux compatibles — aucune action requise</li>
</ol>
<div class="tip"><strong>💡 Conseil :</strong> Pour profiter pleinement de DirectStorage 2.0, assurez-vous que votre jeu est installé sur votre SSD NVMe et non sur un HDD ou SSD SATA.</div>`,
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Qu'est-ce que le Wi-Fi 7 ?</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Vitesses théoriques vs réelles</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. La technologie Multi-Link Operation</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Compatibilité rétroactive avec Wi-Fi 6/5</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Faut-il upgrader maintenant ?</a></li></ul></div>

<h2 id="s1">1. Qu'est-ce que le Wi-Fi 7 ?</h2>
<p>Le Wi-Fi 7 (IEEE 802.11be) est la dernière norme sans fil, officiellement finalisée en 2024. Il fonctionne sur trois bandes simultanément (2,4 GHz, 5 GHz et 6 GHz) et introduit des canaux de 320 MHz, soit le double du Wi-Fi 6E. Le débit théorique maximal atteint <strong>46 Gbps</strong> — une vitesse vertigineuse qui dépasse de loin les besoins actuels du grand public.</p>

<h2 id="s2">2. Vitesses théoriques vs réelles</h2>
<p>Comme toujours en matière de Wi-Fi, la réalité tempère les chiffres marketing. Dans des conditions domestiques typiques, vous pouvez espérer :</p>
<ul>
<li><strong>Wi-Fi 7</strong> : 2-5 Gbps réels à courte distance</li>
<li><strong>Wi-Fi 6E</strong> : 1-2 Gbps réels à courte distance</li>
<li><strong>Wi-Fi 6</strong> : 600 Mbps à 1 Gbps réels</li>
</ul>
<p>Sachant que la majorité des abonnements fibre en France plafonnent à 1-2 Gbps, le Wi-Fi 7 n'est réellement utile que pour les transferts <strong>entre appareils locaux</strong> (NAS, PC à PC, streaming 8K interne).</p>

<h2 id="s3">3. La technologie Multi-Link Operation</h2>
<p>L'innovation réelle du Wi-Fi 7 n'est pas la vitesse brute mais la <strong>MLO (Multi-Link Operation)</strong>. Cette technologie permet à un appareil d'utiliser plusieurs bandes Wi-Fi simultanément, avec basculement automatique en cas d'interférence. La latence descend sous les <strong>2 ms</strong> en conditions optimales — pertinent pour le gaming en ligne et les appels vidéo professionnels.</p>

<h2 id="s4">4. Compatibilité rétroactive avec Wi-Fi 6/5</h2>
<p>Bonne nouvelle : un routeur Wi-Fi 7 est entièrement compatible avec vos appareils Wi-Fi 5 et 6 existants. Vos anciens téléphones, ordinateurs et objets connectés continueront de fonctionner normalement. Seuls les appareils Wi-Fi 7 bénéficieront des nouvelles fonctionnalités. En 2026, les smartphones Wi-Fi 7 se multiplient (iPhone 16+, Galaxy S24+, Pixel 9).</p>

<h2 id="s5">5. Faut-il upgrader maintenant ?</h2>
<p>Notre verdict honnête :</p>
<ul>
<li><strong>Oui, si</strong> : vous avez une connexion 2 Gbps+, plusieurs appareils Wi-Fi 7 récents, et que vous faites du gaming compétitif ou de la vidéo 4K multi-flux</li>
<li><strong>Non, si</strong> : votre connexion est en 500 Mbps ou moins, ou que vos appareils ne supportent pas Wi-Fi 7</li>
<li><strong>Attendez</strong> : les prix des routeurs Wi-Fi 7 sont encore élevés (200-600€). D'ici 2026-2027, ils devraient descendre sous les 150€</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Antivirus mobiles — notre sélection</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. VPN : protégez vos connexions</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Gestionnaires de mots de passe</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Applications 2FA</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Notre recommandation finale</a></li></ul></div>

<h2 id="s1">1. Antivirus mobiles — notre sélection</h2>
<p>Les malwares Android ont augmenté de 35% en 2025. Les applications de sécurité sont désormais indispensables, surtout si vous installez des APK hors du Play Store.</p>
<ul>
<li><strong>Bitdefender Mobile Security</strong> — Le meilleur score de détection (99,9%) dans les tests AV-TEST. Léger, rapide, inclut VPN limité et anti-phishing. Version gratuite disponible avec fonctionnalités réduites.</li>
<li><strong>Kaspersky pour Android</strong> — Excellent taux de détection, fonctions anti-vol avancées. À noter : la controverse géopolitique autour de Kaspersky persiste — à chacun de peser ses priorités.</li>
<li><strong>Malwarebytes (gratuit)</strong> — Parfait pour des analyses ponctuelles. Ne tourne pas en temps réel mais nettoie efficacement un appareil infecté.</li>
</ul>

<h2 id="s2">2. VPN : protégez vos connexions</h2>
<ul>
<li><strong>ProtonVPN Free</strong> — Seul VPN gratuit véritablement fiable. Basé en Suisse, aucun log, vitesses raisonnables sur 3 pays. Pour les usages intensifs, l'abonnement payant est recommandé.</li>
<li><strong>Mullvad VPN</strong> — Paiement anonyme possible (cash, crypto), politique de zéro log auditée. 5€/mois, aucune inscription par email.</li>
<li><strong>NordVPN</strong> — Le plus populaire, réseau de serveurs étoffé, vitesses élevées. Application Android bien conçue.</li>
</ul>

<h2 id="s3">3. Gestionnaires de mots de passe</h2>
<ul>
<li><strong>Bitwarden (gratuit)</strong> — Open source, audité, synchronisation illimitée. Le choix de référence pour allier sécurité et économies.</li>
<li><strong>1Password</strong> — Interface soignée, fonctionnalités famille pratiques, mais payant (3€/mois).</li>
</ul>

<h2 id="s4">4. Applications 2FA</h2>
<ul>
<li><strong>Aegis Authenticator</strong> — Open source, sauvegarde chiffrée exportable, thème sombre. Le meilleur choix sur Android.</li>
<li><strong>Google Authenticator</strong> — Simple mais fiable. Depuis 2023, synchronisation cloud optionnelle avec votre compte Google.</li>
</ul>

<h2 id="s5">5. Notre recommandation finale</h2>
<p>Pour une protection complète sans dépenser un centime, installez ces 3 applications :</p>
<ol>
<li><strong>Bitwarden</strong> — Gérez vos mots de passe correctement</li>
<li><strong>Aegis</strong> — Activez la double authentification partout où c'est possible</li>
<li><strong>ProtonVPN Free</strong> — Utilisez-le systématiquement sur les Wi-Fi publics</li>
</ol>
<div class="tip"><strong>💡 Rappel :</strong> Aucune application de sécurité ne remplace les bons réflexes : ne téléchargez pas d'APK depuis des sources inconnues, maintenez Android à jour et méfiez-vous des permissions excessives.</div>`,
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
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Auditer votre présence en ligne</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Supprimer vos données des GAFAM</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Se désinscrire des services tiers</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Supprimer vos données des data brokers</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Exercer vos droits RGPD</a></li></ul></div>

<h2 id="s1">1. Auditer votre présence en ligne</h2>
<p>Commencez par mesurer l'étendue de votre empreinte numérique. Googlisez votre nom complet entre guillemets, ajoutez votre ville ou votre employeur. Notez tous les résultats qui vous concernent.</p>
<p>Outils utiles :</p>
<ul>
<li><strong>HaveIBeenPwned.com</strong> — Vérifie si votre email a été compromis dans une fuite de données</li>
<li><strong>Dehashed.com</strong> — Recherche plus complète (certaines fonctions payantes)</li>
<li><strong>Google Alerts</strong> — Configurez une alerte sur votre nom pour être notifié de toute nouvelle mention</li>
</ul>

<h2 id="s2">2. Supprimer vos données des GAFAM</h2>
<p><strong>Google :</strong> Rendez-vous sur myaccount.google.com &gt; Données et confidentialité. Vous pouvez télécharger l'ensemble de vos données (Google Takeout) puis supprimer votre compte. Pour supprimer uniquement votre historique de recherche : myactivity.google.com.</p>
<p><strong>Facebook/Meta :</strong> Paramètres &gt; Vos informations Facebook &gt; Suppression et désactivation &gt; Supprimer le compte. La suppression prend 30 jours et est irréversible si vous ne vous reconnectez pas pendant cette période.</p>
<p><strong>LinkedIn :</strong> Paramètres &gt; Données et confidentialité &gt; Fermer le compte. Téléchargez vos données avant.</p>

<h2 id="s3">3. Se désinscrire des services tiers</h2>
<p>Utilisez <strong>JustDeleteMe</strong> (justdeleteme.xyz) — un annuaire de liens directs vers les pages de suppression de compte de centaines de services. Chaque site est classé selon la difficulté à se désinscrire.</p>
<p>Pour les newsletters non désirées, utilisez <strong>Unroll.me</strong> ou <strong>Leave Me Alone</strong> pour vous désabonner en masse.</p>

<h2 id="s4">4. Supprimer vos données des data brokers</h2>
<p>Les data brokers (Spokeo, Whitepages, BeenVerified, etc.) compilent et vendent vos informations personnelles. Chaque site doit être traité individuellement :</p>
<ol>
<li>Recherchez votre nom sur chaque site</li>
<li>Utilisez leur formulaire de suppression (opt-out)</li>
<li>Vérifiez par email si une confirmation est nécessaire</li>
<li>Répétez dans 3 mois car vos données peuvent réapparaître</li>
</ol>
<p>Le service <strong>DeleteMe</strong> automatise cette démarche (payant, ~130$/an) pour ceux qui veulent déléguer.</p>

<h2 id="s5">5. Exercer vos droits RGPD</h2>
<p>En Europe, le RGPD vous donne des droits puissants sur vos données personnelles. Pour toute entreprise traitant vos données, vous pouvez :</p>
<ul>
<li><strong>Droit d'accès</strong> — Demander quelles données sont collectées sur vous</li>
<li><strong>Droit à l'effacement</strong> ("droit à l'oubli") — Exiger la suppression de vos données</li>
<li><strong>Droit à la portabilité</strong> — Récupérer vos données dans un format structuré</li>
</ul>
<p>En cas de refus injustifié, signalez-le à la <strong>CNIL</strong> (cnil.fr). Les entreprises risquent jusqu'à 4% de leur chiffre d'affaires mondial en cas de violation.</p>`,
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
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Critères de sélection</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Google Pixel 8a — Le meilleur équilibre</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Samsung Galaxy A55 — L'écran premium</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Xiaomi Redmi Note 13 Pro — Le roi de la photo</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Notre verdict final</a></li></ul></div>

<h2 id="s1">1. Critères de sélection</h2>
<p>Pour ce comparatif, nous avons retenu les smartphones entre <strong>300 et 500 euros</strong> avec une disponibilité en France. Nos critères d'évaluation : performances processeur, qualité photo, autonomie, durabilité (indice IP), mises à jour garanties et rapport global qualité/prix.</p>

<h2 id="s2">2. Google Pixel 8a — Le meilleur équilibre (499€)</h2>
<p>Le Pixel 8a est notre coup de cœur 2026 pour le milieu de gamme. Equipé du Tensor G3 — le même que le Pixel 8 Pro — il offre des performances IA remarquables : transcription en temps réel, traduction d'appels téléphoniques, gomme magique améliorée.</p>
<ul>
<li><strong>Photo :</strong> Excellent appareil principal 64 MP, Night Sight exceptionnel</li>
<li><strong>Autonomie :</strong> 24h confortables, 72h en mode Extreme Battery Saver</li>
<li><strong>Mises à jour :</strong> 7 ans garantis — le meilleur du marché</li>
<li><strong>Points faibles :</strong> Pas de zoom optique, charge 18W seulement</li>
</ul>

<h2 id="s3">3. Samsung Galaxy A55 — L'écran premium (449€)</h2>
<p>Le Galaxy A55 hérite de la technologie d'écran des flagships Samsung : un Super AMOLED 6,6" à 120 Hz avec une luminosité maximale de 1000 nits. La dalle est clairement la meilleure de sa catégorie de prix.</p>
<ul>
<li><strong>Écran :</strong> Le meilleur de sa gamme de prix</li>
<li><strong>Conception :</strong> Verre Corning Gorilla Glass Victus+, IP67</li>
<li><strong>Mises à jour :</strong> 4 ans Android + 5 ans correctifs sécurité</li>
<li><strong>Points faibles :</strong> Performances gaming en retrait vs Pixel 8a</li>
</ul>

<h2 id="s4">4. Xiaomi Redmi Note 13 Pro — Le roi de la photo (399€)</h2>
<p>Xiaomi frappe fort avec un capteur 200 MP signé Samsung ISOCELL — un niveau rarement vu à ce prix. En plein jour, les photos rivalisent avec des smartphones deux fois plus chers. La charge rapide 67W (0 à 100% en 46 minutes) est également un argument de poids.</p>
<ul>
<li><strong>Photo :</strong> 200 MP exceptionnel en plein jour, correct de nuit</li>
<li><strong>Charge :</strong> 67W ultra-rapide inclus dans la boîte</li>
<li><strong>Prix :</strong> Le meilleur rapport qualité/prix de notre sélection</li>
<li><strong>Points faibles :</strong> Mises à jour limitées à 3 ans, surcouche MIUI parfois lourde</li>
</ul>

<h2 id="s5">5. Notre verdict final</h2>
<ul>
<li><strong>Meilleur achat global :</strong> Google Pixel 8a — Pour les 7 ans de mises à jour et les capacités IA uniques</li>
<li><strong>Meilleur écran :</strong> Samsung Galaxy A55</li>
<li><strong>Meilleur rapport qualité/prix :</strong> Xiaomi Redmi Note 13 Pro</li>
</ul>
<div class="tip"><strong>💡 Conseil :</strong> Si vous êtes sensible à la durée de vie logicielle de votre téléphone, le Pixel 8a à 499€ reste la meilleure décision d'achat sur le long terme.</div>`,
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
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Pourquoi des applications démarrent automatiquement</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Via les Paramètres Android natifs</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Méthode selon votre marque</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Désactiver les applications système non utilisées</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Résultats attendus</a></li></ul></div>

<h2 id="s1">1. Pourquoi des applications démarrent automatiquement</h2>
<p>Android permet aux applications de déclarer des "services de démarrage" qui s'activent automatiquement après l'allumage ou quand d'autres applis se lancent. Certaines applications légitimes en ont besoin (messageries pour recevoir les notifications), mais d'autres en abusent pour rester actives en permanence et collecter des données.</p>
<p>Ces processus en arrière-plan ralentissent le démarrage, consomment de la RAM et drainent la batterie. Sur un téléphone d'entrée ou milieu de gamme avec 4-6 Go de RAM, l'impact est significatif.</p>

<h2 id="s2">2. Via les Paramètres Android natifs</h2>
<ol>
<li>Allez dans <strong>Paramètres &gt; Applications</strong></li>
<li>Sélectionnez l'application problématique</li>
<li>Appuyez sur <strong>Forcer l'arrêt</strong> pour la stopper immédiatement</li>
<li>Pour empêcher le redémarrage automatique, désactivez les <strong>Notifications</strong> et retirez les permissions <strong>Localisation</strong> si non nécessaires</li>
</ol>
<div class="tip"><strong>💡 Astuce :</strong> Sur Android pur (Pixel), allez dans Paramètres &gt; Batterie &gt; Optimisation de la batterie. Sélectionnez "Toutes les applications" et forcez l'optimisation sur les applis gourmandes.</div>

<h2 id="s3">3. Méthode selon votre marque</h2>
<p><strong>Samsung (One UI) :</strong> Paramètres &gt; Gestion des applications &gt; Applications en cours d'exécution. Chaque application dispose d'un interrupteur de démarrage automatique dans Paramètres &gt; Batterie et maintenance de l'appareil &gt; Batterie &gt; Limites d'utilisation en arrière-plan.</p>
<p><strong>Xiaomi (MIUI) :</strong> Paramètres &gt; Applications &gt; Gestion des applications &gt; sélectionnez l'app &gt; Démarrage automatique. Ou directement dans l'application Sécurité de Xiaomi &gt; Démarrage automatique.</p>
<p><strong>Huawei (EMUI) :</strong> Paramètres &gt; Applications &gt; sélectionnez l'app &gt; Gestion de la batterie &gt; Lancement de l'application (désactivez le lancement automatique).</p>

<h2 id="s4">4. Désactiver les applications système non utilisées</h2>
<p>Certaines applications préinstallées par votre opérateur ou fabricant ne peuvent pas être désinstallées, mais peuvent être désactivées :</p>
<ol>
<li>Paramètres &gt; Applications</li>
<li>Activez l'affichage des "applications système" (souvent dans le menu à trois points)</li>
<li>Sélectionnez l'application &gt; <strong>Désactiver</strong></li>
</ol>
<div class="warn"><strong>⚠️ Attention :</strong> Ne désactivez que les applications dont vous êtes certain de l'inutilité. Désactiver des composants système critiques peut déstabiliser l'appareil.</div>

<h2 id="s5">5. Résultats attendus</h2>
<p>Après avoir désactivé le démarrage automatique des principales applications non essentielles :</p>
<ul>
<li>Temps de démarrage réduit de 20 à 40% selon les appareils</li>
<li>RAM disponible augmentée de 200-500 Mo</li>
<li>Autonomie améliorée de 1 à 3 heures selon l'usage</li>
<li>Téléphone plus réactif en utilisation quotidienne</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. SFC — Vérification des fichiers système</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. DISM — Réparation de l'image Windows</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Restauration du système</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Réinitialisation avec conservation des fichiers</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Réparation au démarrage</a></li></ul></div>

<h2 id="s1">1. SFC — Vérification des fichiers système</h2>
<p>L'outil SFC (System File Checker) analyse et répare automatiquement les fichiers système Windows corrompus. C'est la première chose à tenter pour la grande majorité des bugs Windows 11.</p>
<ol>
<li>Ouvrez le menu Démarrer et cherchez <strong>Invite de commandes</strong></li>
<li>Cliquez droit &gt; <strong>Exécuter en tant qu'administrateur</strong></li>
<li>Tapez la commande : <code>sfc /scannow</code> et appuyez sur Entrée</li>
<li>Attendez la fin du scan (5-15 minutes) — ne fermez pas la fenêtre</li>
<li>Redémarrez votre PC</li>
</ol>
<p>Si SFC trouve et corrige des fichiers, vous verrez le message "La Protection des ressources Windows a trouvé des fichiers endommagés et les a réparés avec succès."</p>

<h2 id="s2">2. DISM — Réparation de l'image Windows</h2>
<p>Si SFC échoue ou détecte des erreurs qu'il ne peut pas corriger, DISM (Deployment Image Servicing and Management) peut réparer le magasin de composants Windows depuis les serveurs Microsoft.</p>
<ol>
<li>Dans une Invite de commandes en tant qu'administrateur :</li>
<li>Tapez : <code>DISM /Online /Cleanup-Image /CheckHealth</code> (diagnostic rapide)</li>
<li>Puis : <code>DISM /Online /Cleanup-Image /ScanHealth</code> (analyse complète)</li>
<li>Si des corruptions sont trouvées : <code>DISM /Online /Cleanup-Image /RestoreHealth</code></li>
<li>Après DISM, relancez SFC pour finaliser les réparations</li>
</ol>
<div class="warn"><strong>⚠️ Connexion requise :</strong> DISM /RestoreHealth télécharge des fichiers depuis les serveurs Microsoft. Assurez-vous d'avoir une connexion internet stable pendant la procédure.</div>

<h2 id="s3">3. Restauration du système</h2>
<p>Si votre PC fonctionnait correctement avant une date précise (installation d'un logiciel, mise à jour Windows), la restauration système peut ramener Windows à cet état antérieur sans affecter vos documents.</p>
<ol>
<li>Recherchez "Créer un point de restauration" dans le menu Démarrer</li>
<li>Cliquez sur <strong>Restauration du système</strong></li>
<li>Choisissez un point de restauration avant l'apparition du problème</li>
<li>Cliquez sur <strong>Analyser les programmes affectés</strong> pour voir ce qui sera supprimé</li>
<li>Confirmez et attendez le redémarrage (10-20 minutes)</li>
</ol>

<h2 id="s4">4. Réinitialisation avec conservation des fichiers</h2>
<p>Cette option réinstalle Windows 11 proprement en conservant vos documents personnels (Documents, Images, Vidéos) mais supprime toutes vos applications installées.</p>
<ol>
<li>Paramètres &gt; Système &gt; Récupération &gt; Réinitialiser ce PC</li>
<li>Choisissez <strong>"Conserver mes fichiers"</strong></li>
<li>Sélectionnez "Téléchargement dans le cloud" pour les meilleurs résultats</li>
<li>Confirmez et patientez 30 à 60 minutes</li>
</ol>

<h2 id="s5">5. Réparation au démarrage</h2>
<p>Si Windows 11 ne démarre plus du tout, utilisez l'environnement de récupération Windows (WinRE) :</p>
<ol>
<li>Redémarrez votre PC 3 fois consécutives en interrompant le démarrage (bouton power) — Windows passe automatiquement en mode récupération</li>
<li>Ou depuis une clé USB Windows 11 : sélectionnez "Réparer l'ordinateur"</li>
<li>Choisissez Dépannage &gt; Options avancées &gt; Réparation au démarrage</li>
</ol>`,
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
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Pourquoi utiliser un VPN ?</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Choisir le bon VPN gratuit</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Installer ProtonVPN Free</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Configuration recommandée</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Limitations des VPN gratuits</a></li></ul></div>

<h2 id="s1">1. Pourquoi utiliser un VPN ?</h2>
<p>Un VPN (Virtual Private Network) chiffre l'intégralité de votre trafic internet et masque votre adresse IP réelle. C'est particulièrement important dans ces situations :</p>
<ul>
<li>Connexion à un Wi-Fi public (café, hôtel, aéroport) — risque d'interception des données</li>
<li>Accès à des ressources géo-bloquées (streaming, sites d'information)</li>
<li>Protection contre la surveillance de votre opérateur internet</li>
<li>Téléchargement depuis des réseaux P2P</li>
</ul>
<div class="warn"><strong>⚠️ Mythe à démonter :</strong> Un VPN ne vous rend pas "anonyme" sur internet. Il masque votre IP mais vos comptes en ligne (Google, Facebook) permettent toujours de vous identifier.</div>

<h2 id="s2">2. Choisir le bon VPN gratuit</h2>
<p>Le marché des VPN gratuits est saturé d'arnaques. Les VPN gratuits douteux revendent vos données ou injectent des publicités dans votre trafic — l'exact opposé de la vie privée. Tenez-vous à ces options vérifiées :</p>
<ul>
<li><strong>ProtonVPN Free</strong> — Pas de limite de données, 3 pays (Suisse, Pays-Bas, USA), vitesses modérées. Le plus recommandé.</li>
<li><strong>Windscribe Free</strong> — 10 Go/mois, plus de 10 pays. Généreux mais limité en données.</li>
<li><strong>Tunnel Bear Free</strong> — 2 Go/mois seulement, mais interface soignée et fiable.</li>
</ul>

<h2 id="s3">3. Installer ProtonVPN Free</h2>
<ol>
<li>Ouvrez le <strong>Google Play Store</strong> et recherchez "ProtonVPN"</li>
<li>Installez l'application officielle (vérifiez que l'éditeur est "Proton AG")</li>
<li>Ouvrez ProtonVPN et cliquez sur <strong>Créer un compte gratuit</strong></li>
<li>Saisissez un email, choisissez un mot de passe robuste</li>
<li>Vérifiez votre email pour confirmer le compte</li>
<li>Dans l'app, cliquez sur <strong>Connexion rapide</strong> — ProtonVPN choisit automatiquement le serveur le plus rapide</li>
<li>Acceptez la demande de configuration VPN d'Android</li>
</ol>

<h2 id="s4">4. Configuration recommandée</h2>
<p>Dans les paramètres de ProtonVPN, activez ces options :</p>
<ul>
<li><strong>Kill Switch</strong> — Coupe internet si le VPN se déconnecte. Empêche toute fuite de données accidentelle.</li>
<li><strong>Démarrage automatique</strong> — Le VPN se reconnecte automatiquement à l'ouverture de l'app.</li>
<li><strong>Protocole VPN :</strong> Laissez sur "Automatique" pour la meilleure compatibilité.</li>
</ul>

<h2 id="s5">5. Limitations des VPN gratuits</h2>
<p>Soyez conscient des restrictions de la version gratuite :</p>
<ul>
<li>Serveurs partagés avec beaucoup d'utilisateurs = vitesses plus lentes aux heures de pointe</li>
<li>3 pays seulement (Suisse, Pays-Bas, États-Unis)</li>
<li>Pas de fonctionnalités avancées (Split tunneling, serveurs P2P, etc.)</li>
</ul>
<p>Pour un usage quotidien intensif, l'abonnement ProtonVPN Plus (5€/mois environ) offre des serveurs dédiés nettement plus rapides et 90+ pays. Mais pour une protection ponctuelle sur Wi-Fi public, la version gratuite suffit amplement.</p>`,
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Repositionner le routeur</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Changer de canal Wi-Fi</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Basculer sur la bande 5 GHz</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Mettre à jour le firmware et les pilotes</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. DNS rapide et autres optimisations</a></li></ul></div>

<h2 id="s1">1. Repositionner le routeur</h2>
<p>La position du routeur est le facteur numéro un de la qualité du Wi-Fi. Les règles d'or :</p>
<ul>
<li><strong>En hauteur</strong> — Le signal se diffuse vers le bas et les côtés. Placez le routeur en hauteur (étagère, haut d'une armoire) plutôt qu'au sol.</li>
<li><strong>Au centre du logement</strong> — Pour couvrir toutes les pièces équitablement.</li>
<li><strong>À l'écart des obstacles</strong> — Les murs en béton, les miroirs, les fours à micro-ondes et les appareils Bluetooth perturbent le signal.</li>
<li><strong>Les antennes verticales</strong> — Sur les routeurs avec antennes mobiles, orientez-les verticalement pour une couverture horizontale maximale.</li>
</ul>

<h2 id="s2">2. Changer de canal Wi-Fi</h2>
<p>En ville, des dizaines de réseaux Wi-Fi se partagent les mêmes canaux, créant des interférences. Choisir un canal moins encombré peut considérablement améliorer vos performances.</p>
<ol>
<li>Installez l'application <strong>WiFi Analyzer</strong> (Android) ou <strong>NetSpot</strong> (Mac/Windows)</li>
<li>Identifiez les canaux les moins utilisés dans votre voisinage</li>
<li>Dans l'interface de votre routeur, changez le canal Wi-Fi 2,4 GHz manuellement</li>
<li>Sur la bande 2,4 GHz, privilégiez les canaux 1, 6 ou 11 (les seuls qui ne se chevauchent pas)</li>
</ol>

<h2 id="s3">3. Basculer sur la bande 5 GHz</h2>
<p>La bande 2,4 GHz souffre de nombreuses interférences (micro-ondes, Bluetooth, voisins). La bande 5 GHz offre des débits nettement supérieurs sur de courtes distances (moins de 15 mètres sans obstacles). Si votre routeur est récent, un deuxième réseau Wi-Fi en 5 GHz devrait apparaître dans la liste des réseaux disponibles. Connectez vos appareils proches du routeur sur cette bande.</p>

<h2 id="s4">4. Mettre à jour le firmware et les pilotes</h2>
<ul>
<li><strong>Firmware du routeur :</strong> Connectez-vous à l'interface d'administration et vérifiez les mises à jour. Des bugs de performance sont régulièrement corrigés.</li>
<li><strong>Pilotes Wi-Fi du PC :</strong> Gestionnaire de périphériques &gt; Cartes réseau &gt; clic droit sur votre adaptateur Wi-Fi &gt; Mettre à jour le pilote.</li>
<li><strong>Redémarrage régulier :</strong> Redémarrez votre routeur et modem une fois par semaine. Les fuites mémoire dans le firmware s'accumulent avec le temps.</li>
</ul>

<h2 id="s5">5. DNS rapide et autres optimisations</h2>
<p>Le serveur DNS traduit les noms de domaine en adresses IP. Un DNS lent ralentit l'ouverture de chaque nouvelle page. Changez pour un DNS rapide dans les paramètres de votre routeur :</p>
<ul>
<li><strong>Cloudflare 1.1.1.1</strong> — Le plus rapide selon Dnsspeedtest.net</li>
<li><strong>Google 8.8.8.8</strong> — Fiable et mondial</li>
</ul>
<p>Autres optimisations : désactivez les appareils connectés inutilisés, activez la QoS (Quality of Service) pour prioriser le streaming et le gaming, et si rien ne suffit, envisagez des <strong>prises CPL</strong> (courant porteur en ligne) ou un système Wi-Fi maillé (mesh) pour les grandes surfaces.</p>`,
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Microsoft Defender — Configuration optimale</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. SmartScreen et protection web</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Contrôle de compte utilisateur (UAC)</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. BitLocker et chiffrement</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Bonnes pratiques essentielles</a></li></ul></div>

<h2 id="s1">1. Microsoft Defender — Configuration optimale</h2>
<p>En 2026, Microsoft Defender a considérablement progressé. Les tests indépendants AV-TEST et AV-Comparatives lui attribuent régulièrement des scores de détection dépassant 99%. Pour un usage standard, il est amplement suffisant — à condition d'être bien configuré.</p>
<p>Vérifications essentielles :</p>
<ol>
<li>Ouvrez <strong>Sécurité Windows</strong> (cherchez dans le menu Démarrer)</li>
<li>Vérifiez que toutes les tuiles affichent une coche verte</li>
<li>Protection contre les virus : activez la <strong>protection en temps réel</strong> et la <strong>protection fournie par le cloud</strong></li>
<li>Planifiez une analyse complète hebdomadaire : Sécurité Windows &gt; Protection contre les virus et menaces &gt; Options d'analyse &gt; Analyse complète</li>
</ol>

<h2 id="s2">2. SmartScreen et protection web</h2>
<p>SmartScreen est le filtre anti-phishing et anti-malware de Microsoft intégré à Windows 11 et Edge. Il analyse les fichiers téléchargés et les sites web en temps réel contre une base de données de menaces connues.</p>
<ul>
<li>Vérifiez qu'il est actif : Sécurité Windows &gt; Contrôle des applications et du navigateur</li>
<li>Activez <strong>"Vérifier les applications et les fichiers"</strong> sur "Avertissement"</li>
<li>Activez <strong>SmartScreen pour Microsoft Edge</strong></li>
<li>Pour Firefox/Chrome : installez l'extension <strong>uBlock Origin</strong> pour bloquer publicités et trackers malveillants</li>
</ul>

<h2 id="s3">3. Contrôle de compte utilisateur (UAC)</h2>
<p>L'UAC demande confirmation avant toute modification système. Ne le désactivez jamais — c'est votre dernière ligne de défense contre les logiciels malveillants qui tentent de s'installer silencieusement.</p>
<p>Niveau recommandé : "Toujours avertir" (le plus sécurisé). Réglez-le via : Panneau de configuration &gt; Comptes d'utilisateurs &gt; Modifier les paramètres de contrôle de compte d'utilisateur.</p>

<h2 id="s4">4. BitLocker et chiffrement</h2>
<p>BitLocker chiffre votre disque dur entier — si quelqu'un vole votre PC ou en retire le disque, vos données restent inaccessibles. Disponible sur Windows 11 Pro et Entreprise.</p>
<ol>
<li>Cherchez "BitLocker" dans le menu Démarrer</li>
<li>Activez BitLocker sur votre lecteur C:</li>
<li>Sauvegardez impérativement la clé de récupération sur votre compte Microsoft ou une clé USB</li>
</ol>

<h2 id="s5">5. Bonnes pratiques essentielles</h2>
<p>Aucun antivirus ne peut vous protéger contre vos propres erreurs. Les règles d'or :</p>
<ul>
<li><strong>Mises à jour automatiques :</strong> Ne les retardez pas. La majorité des infections exploitent des failles connues et corrigées depuis des mois.</li>
<li><strong>Compte standard au quotidien :</strong> N'utilisez pas un compte administrateur pour vos activités courantes. Créez un compte standard et n'utilisez l'admin que pour les installations.</li>
<li><strong>Vigilance avec les pièces jointes :</strong> Aucun service légitime ne vous envoie des exécutables (.exe, .msi) par email.</li>
<li><strong>Scan ponctuel Malwarebytes :</strong> L'outil gratuit de Malwarebytes complémente parfaitement Defender pour des analyses ponctuelles approfondies.</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Identifier ce qui prend le plus de place</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Vider le cache des applications</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Trier les photos et vidéos</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Supprimer ou alléger les applications</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Utiliser le stockage cloud</a></li></ul></div>

<h2 id="s1">1. Identifier ce qui prend le plus de place</h2>
<p>Avant de supprimer à l'aveugle, identifiez les plus gros consommateurs d'espace :</p>
<ol>
<li>Paramètres &gt; Stockage</li>
<li>Android affiche une répartition visuelle : Applications, Images, Vidéos, Audio, Téléchargements, Divers</li>
<li>Sur la plupart des téléphones, les <strong>photos et vidéos</strong> représentent 60-80% de l'espace utilisé</li>
<li>Les <strong>données d'applications</strong> (WhatsApp, Spotify, Netflix avec contenus hors ligne) peuvent aussi atteindre plusieurs Go</li>
</ol>

<h2 id="s2">2. Vider le cache des applications</h2>
<p>Le cache est un stockage temporaire qu'utilisent les applications pour aller plus vite. Il peut s'accumuler considérablement sans que vous le voyiez — WhatsApp seul peut générer plusieurs Go de cache avec les médias reçus.</p>
<ol>
<li>Paramètres &gt; Applications</li>
<li>Sélectionnez une application (commencez par les grosses : WhatsApp, Instagram, Chrome)</li>
<li>Stockage &gt; <strong>Vider le cache</strong></li>
<li>Répétez pour chaque application problématique</li>
</ol>
<div class="tip"><strong>💡 Astuce rapide :</strong> L'application <strong>Files by Google</strong> (gratuite) identifie automatiquement les fichiers inutiles, les doublons et les fichiers volumineux avec une interface simple et claire.</div>

<h2 id="s3">3. Trier les photos et vidéos</h2>
<p>Google Photos peut vous aider à libérer massivement de l'espace :</p>
<ul>
<li>Activez la <strong>sauvegarde Google Photos</strong> (qualité "Originale" ou "Qualité de stockage")</li>
<li>Une fois toutes les photos sauvegardées dans le cloud, utilisez la fonction <strong>"Libérer de l'espace"</strong> dans Google Photos pour supprimer les copies locales déjà sauvegardées</li>
<li>En moyenne, cette opération libère 5 à 15 Go sur un téléphone utilisé depuis 2 ans</li>
</ul>
<p>Pensez aussi à vider la corbeille de Google Photos (les suppressions y restent 60 jours).</p>

<h2 id="s4">4. Supprimer ou alléger les applications</h2>
<ul>
<li><strong>Désinstaller les applications inutilisées :</strong> Paramètres &gt; Applications &gt; triez par "Dernier accès" pour identifier celles que vous n'avez pas ouvertes depuis des mois</li>
<li><strong>Versions Lite :</strong> Facebook Lite, Messenger Lite, Instagram Lite prennent 10 fois moins de place que leurs versions complètes</li>
<li><strong>Applications web :</strong> Pour certains services (Pinterest, Twitter/X, YouTube), vous pouvez utiliser le navigateur au lieu d'installer l'application native</li>
</ul>

<h2 id="s5">5. Utiliser le stockage cloud</h2>
<p>Les solutions cloud gratuites disponibles :</p>
<ul>
<li><strong>Google Drive :</strong> 15 Go gratuits partagés entre Gmail, Drive et Google Photos</li>
<li><strong>OneDrive :</strong> 5 Go gratuits, s'intègre parfaitement avec Windows</li>
<li><strong>pCloud :</strong> 10 Go gratuits, stockage à vie en option</li>
</ul>
<p>Pour les documents et fichiers importants, activez la synchronisation automatique. Vos fichiers restent accessibles même après leur suppression locale.</p>`,
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
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Quand utiliser une adresse jetable ?</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Services d'email temporaire (sans compte)</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Aliases permanents avec SimpleLogin</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. Aliases avec ProtonMail</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Comparatif et recommandations</a></li></ul></div>

<h2 id="s1">1. Quand utiliser une adresse jetable ?</h2>
<p>Votre adresse email principale est précieuse. Ne la communiquez pas à des services dont vous n'êtes pas certain de la fiabilité. Les cas d'usage pour un email jetable :</p>
<ul>
<li>Télécharger un guide ou un ebook en échange d'une inscription</li>
<li>Tester un nouveau service sans engagement</li>
<li>Participer à un concours en ligne</li>
<li>Inscription sur des forums ou communautés</li>
<li>Accéder à du contenu "réservé aux membres" ponctuellement</li>
</ul>

<h2 id="s2">2. Services d'email temporaire (sans compte)</h2>
<p>Ces services génèrent une adresse email valide temporairement, sans inscription. Idéal pour recevoir un email de confirmation unique.</p>
<ul>
<li><strong>Temp-mail.org</strong> — Génère une adresse aléatoire instantanément. Interface claire, messages reçus visibles directement. L'adresse expire après quelques heures.</li>
<li><strong>Guerrilla Mail</strong> — L'un des plus anciens et fiables. Permet de personnaliser le nom d'utilisateur. Conserve les emails 1 heure.</li>
<li><strong>Mailinator</strong> — Boîtes publiques accessibles par n'importe qui connaissant l'adresse. N'utilisez pas pour des données sensibles.</li>
</ul>
<div class="warn"><strong>⚠️ Limite :</strong> Ces services sont parfois bloqués par certains sites qui détectent les domaines d'emails jetables. Dans ce cas, utilisez un alias permanent.</div>

<h2 id="s3">3. Aliases permanents avec SimpleLogin</h2>
<p>SimpleLogin est un service open source qui crée des aliases permanents qui redirigent vers votre vraie adresse. Vous pouvez activer/désactiver chaque alias individuellement.</p>
<ol>
<li>Créez un compte gratuit sur simplelogin.io</li>
<li>Cliquez sur "Nouvel alias" et choisissez un nom ou laissez générer automatiquement</li>
<li>Utilisez cet alias partout (ex: newsletter.amazon@votre-alias.simplelogin.co)</li>
<li>Si l'alias reçoit du spam, désactivez-le en un clic — votre vraie adresse reste propre</li>
</ol>
<p>La version gratuite permet jusqu'à 15 aliases. SimpleLogin a été racheté par Proton — intégration native avec ProtonMail.</p>

<h2 id="s4">4. Aliases avec ProtonMail</h2>
<p>Si vous utilisez ProtonMail, vous bénéficiez nativement d'aliases dans l'onglet Paramètres &gt; Adresses email. Pratique pour séparer usages personnels, professionnels et inscription en ligne, tout en recevant tout dans la même boîte chiffrée.</p>

<h2 id="s5">5. Comparatif et recommandations</h2>
<ul>
<li><strong>Email ponctuel, une seule confirmation :</strong> Temp-mail.org ou Guerrilla Mail</li>
<li><strong>Inscription à un service que vous utiliserez régulièrement :</strong> SimpleLogin (alias permanent désactivable)</li>
<li><strong>Usage professionnel et vie privée maximale :</strong> ProtonMail + aliases intégrés</li>
</ul>`,
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
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&q=80&auto=format&fit=crop",
    content: `<div class="sommaire"><h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem 0">📋 Sommaire</h3><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem"><li><a href="#s1" style="color:#4f46e5;text-decoration:none;font-weight:500">1. Agir vite — ce qui se passe après une suppression</a></li><li><a href="#s2" style="color:#4f46e5;text-decoration:none;font-weight:500">2. Vérifier la corbeille et l'Historique des fichiers</a></li><li><a href="#s3" style="color:#4f46e5;text-decoration:none;font-weight:500">3. Recuva — la solution gratuite</a></li><li><a href="#s4" style="color:#4f46e5;text-decoration:none;font-weight:500">4. TestDisk et PhotoRec pour les cas difficiles</a></li><li><a href="#s5" style="color:#4f46e5;text-decoration:none;font-weight:500">5. Prévenir les pertes futures</a></li></ul></div>

<h2 id="s1">1. Agir vite — ce qui se passe après une suppression</h2>
<p>Quand Windows supprime un fichier, il n'efface pas immédiatement les données du disque. Il marque simplement l'espace comme "disponible". Les données restent physiquement présentes jusqu'à ce qu'un nouveau fichier les écrase.</p>
<p><strong>Règle absolue :</strong> Dès que vous réalisez la suppression accidentelle, cessez toute activité d'écriture sur ce disque. Ne téléchargez rien, n'installez aucun logiciel sur la partition concernée. Chaque écriture réduit les chances de récupération.</p>
<div class="warn"><strong>⚠️ SSD vs HDD :</strong> La récupération est beaucoup plus difficile sur les SSD en raison de la fonction TRIM qui efface réellement les blocs libérés. Sur HDD, les chances de récupération restent élevées pendant plusieurs jours.</div>

<h2 id="s2">2. Vérifier la corbeille et l'Historique des fichiers</h2>
<p><strong>Corbeille :</strong> Commencez par là — double-cliquez sur la Corbeille, cherchez votre fichier, clic droit &gt; Restaurer.</p>
<p><strong>Historique des fichiers Windows :</strong> Si vous avez activé cette fonctionnalité, Windows sauvegarde automatiquement les versions précédentes de vos fichiers.</p>
<ol>
<li>Clic droit sur le dossier parent du fichier supprimé</li>
<li>Sélectionnez "Restaurer les versions précédentes"</li>
<li>Parcourez les sauvegardes disponibles et restaurez la version souhaitée</li>
</ol>

<h2 id="s3">3. Recuva — la solution gratuite</h2>
<p>Recuva (de Piriform, les créateurs de CCleaner) est l'outil de récupération gratuit le plus efficace pour les utilisateurs non techniques. Interface française disponible.</p>
<ol>
<li>Téléchargez Recuva depuis piriform.com — installez-le sur un disque différent de celui contenant les fichiers perdus</li>
<li>Lancez l'assistant : sélectionnez le type de fichier et l'emplacement</li>
<li>Cliquez sur "Analyser" — l'analyse rapide prend 2-5 minutes</li>
<li>Si les fichiers n'apparaissent pas, cochez "Activer l'analyse approfondie" (30-60 minutes)</li>
<li>Les fichiers trouvés sont notés par probabilité de récupération (vert = excellent, jaune = acceptable, rouge = difficile)</li>
<li>Sélectionnez les fichiers et cliquez sur "Récupérer" — sauvegardez sur un autre disque</li>
</ol>

<h2 id="s4">4. TestDisk et PhotoRec pour les cas difficiles</h2>
<p>Pour les partitions corrompues, formatages accidentels ou systèmes de fichiers endommagés, TestDisk et PhotoRec (deux outils open source gratuits distribués ensemble) sont plus puissants que Recuva.</p>
<ul>
<li><strong>TestDisk</strong> — Récupère les partitions perdues et répare les tables de partition corrompues. Interface en ligne de commande, idéal pour les utilisateurs avancés.</li>
<li><strong>PhotoRec</strong> — Malgré son nom, récupère plus de 480 formats de fichiers (documents, vidéos, archives, bases de données). Ne récupère pas les noms de fichiers originaux.</li>
</ul>

<h2 id="s5">5. Prévenir les pertes futures</h2>
<p>La récupération est incertaine — la prévention est inévitable. Mettez en place cette stratégie dès aujourd'hui :</p>
<ul>
<li><strong>Règle 3-2-1 :</strong> 3 copies de vos données, sur 2 supports différents, dont 1 hors site</li>
<li><strong>Historique des fichiers Windows :</strong> Paramètres &gt; Système &gt; Stockage &gt; Options de sauvegarde — pointez vers un disque externe</li>
<li><strong>OneDrive ou Google Drive :</strong> Pour les documents importants, synchronisez automatiquement</li>
<li><strong>Macrium Reflect Free :</strong> Créez une image complète de votre disque système mensuellement</li>
</ul>`,
  },
];
