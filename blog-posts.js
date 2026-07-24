/* ==========================================================================
   ARTICLES DU BLOG SCARABOT
   ==========================================================================
   Pour ajouter un nouvel article : copie un bloc { ... } ci-dessous,
   colle-le en PREMIER dans le tableau (les plus récents en haut),
   et modifie les champs. C'est tout — blog.html se met à jour tout seul.

   Champs :
   - id         : identifiant unique, sans espace ni accent (ex: "post-500")
   - title      : titre de l'article
   - date       : date affichée (ex: "18 juillet 2026")
   - readingTime: temps de lecture affiché (ex: "3 minutes de lecture")
   - author     : nom de l'auteur
   - authorRole : rôle de l'auteur (ex: "Développeur Principal")
   - excerpt    : texte de l'article. Tu peux mettre du <strong>gras</strong>.
   - icon       : un emoji affiché dans le bandeau si tu ne mets pas de photo
   - image      : (optionnel) chemin ou URL d'une photo pour le bandeau.
                  Si tu la mets, elle remplace l'emoji "icon".
                  Ex: "images/post-421.png" (photo à côté de blog.html)
                  ou une URL complète: "https://exemple.com/photo.jpg"
   - tag        : catégorie affichée (ex: "Mises à jour", "Coulisses")
   ========================================================================== */

const BLOG_POSTS = [
  {
    id: "post-421",
    title: "Refonte du système de modération et nouveaux logs (4.2.1)",
    date: "18 juillet 2026",
    readingTime: "3 minutes de lecture",
    author: "Bratony",
    authorRole: "Développeur Principal",
    excerpt: "La version <strong>4.2.1</strong> apporte une refonte des commandes de modération et une amélioration des journaux d'événements, pour un suivi plus clair de l'activité sur votre serveur.",
    icon: "🆕",
    tag: "Mises à jour"
  },
  {
    id: "post-premium",
    title: "Lancement de l'offre Premium ScaraBot",
    date: "10 juin 2026",
    readingTime: "3 minutes de lecture",
    author: "Bratony",
    authorRole: "Développeur Principal",
    excerpt: "ScaraBot reste <strong>gratuit</strong> pour l'essentiel — et le restera. Aujourd'hui, nous lançons le <strong>Premium</strong> : des commandes exclusives et un moyen concret de soutenir le développement du bot.",
    icon: "⭐",
    tag: "Mises à jour"
  },
  {
    id: "post-architecture",
    title: "Comment ScaraBot gère plusieurs serveurs simultanément",
    date: "2 mai 2026",
    readingTime: "5 minutes de lecture",
    author: "Bratony",
    authorRole: "Développeur Principal",
    excerpt: "Un aperçu des <strong>coulisses techniques</strong> derrière la stabilité du bot : comment ScaraBot gère la configuration et les données de chaque serveur de façon isolée et fiable.",
    icon: "📈",
    tag: "Coulisses"
  }
];
