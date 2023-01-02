# Coding 4 Tomorrow React Interview

## ☑️ Instructions
1. Lister les films dans des cartes côte à côte (responsive) et afficher :
    - l'image de l'affiche
    - le titre en gras
    - la catégorie
  
2. Ajouter un bouton dans les cartes permettant de supprimer celles-ci

3. Ajouter un système de like / dislike
    - Afficher un bouton toggle like et dislike
    - Afficher le nombre de like et dislike

4. Ajouter un filtre par catégorie
    - Utiliser React Hook Form
    - Ce filtre permet de sélectionner une catégories à afficher
    - Les catégories doivent être récupérées dynamiquement
    - Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître

5. Ajouter un système de pagination
    - Afficher 6 films par page
    - Boutons précédent/suivant

6. Ajouter un champ de recherche par titre de film contraint par la/les catégorie(s) sélectionnée(s)
    - Utilisez React Hook Form pour faire fonctionner le champ de recherche

7. Ajouter des tests unitaires et tester :
    - La fonction de filtrage
    - La fonction de recherche
    - Le système like / dislike
    - Le composant de carte du film

8. Créer les tests e2e :
    - Si on filtre par catégorie puis que l'on recherche par mot clés, on ne doit chercher que dans la catégorie en cours
    - Si on fait une recherche puis que l'on filtre par catégorie, on ne doit filtrer que dans la recherche en cours
    - Si nous sommes sur la page 2 et que l'on filtre par catégorie, s'il n'y a qu'une seule page de résultats, on doit se retrouver sur la page 1
    - Si on filtre par films d'animation et que l'on supprime le seul film de la catégorie, on doit se retrouver sur la catégorie "Tous les films" et afficher les films correspondants
    - Si on like un film puis que l'on change de catégorie (le film disparaît), quand on retourne dans la catégorie du film liké, notre like doit toujours apparaître sur la fiche.
    - Si on supprime le dernier film d'une catégorie, la catégorie doit disparaître

### ✅ Conditions
- **Utiliser TypeScript**
- Utiliser NextJS
- Utiliser les hooks React
- Utiliser React Hook Form
- Utiliser les contexts ou RecoilJS ou Zustand
- Utiliser Tailwind pour le design
- Utiliser Cypress et Jest pour les tests
- Utiliser toutes les librairies de votre choix afin de mettre en place ces consignes
- Doit démontrer le Single Source of Truth principle
- Doit démontrer le DRY principle

### ⚠️ Important
- La suppression du comportement asynchrone dans `movies.js` entraînera l'annulation du test.
- **Une attention toute particulière sera portée à la structure du code et du projet, imaginez que vous travaillez en équipe.**
