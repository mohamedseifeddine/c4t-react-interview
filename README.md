# Coding 4 Tomorrow React Interview

## Instructions
1. Lister les films dans des cartes côte à côte (responsive) et afficher :
    - l'image de l'affiche
    - le titre en gras
    - la catégorie
  
2. Ajouter un bouton dans les cartes permettant de supprimer celles-ci

3. Ajouter un système de like / dislike
    - Afficher un bouton toggle like et dislike
    - Afficher le nombre de like et dislike

4. Ajouter un filtre **multi-select** par catégorie
    - Ce filtre permet de sélectionner plusieurs catégories à afficher
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
    - Tester la pagination
    - Tester la recherche
    - Tester le filtrage des catégories
    - Tester le système like / dislike

### Conditions
- Utiliser NextJS
- Utiliser les hooks React
- Utiliser React Hook Form
- Utiliser les contexts ou RecoilJS ou Zustand
- Utiliser Tailwind pour le design
- Utiliser Cypress et Jest pour les tests
- Utiliser toutes les librairies de votre choix afin de mettre en place ces consignes

**Utiliser TypeScript**

### Important
/!\ La suppression du comportement asynchrone dans `movies.js` entraînera l'annulation du test.
