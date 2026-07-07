# SRP — Principe de Responsabilité Unique

**Symptômes** : Fragile · Rigide · Visqueux

Si une classe a plus d'une responsabilité, alors les responsabilités deviennent couplées.

**Comment identifier s'il n'est pas respecté**

- Se poser la question de pourquoi cette classe / fonction pourrait changer

<!--
Aucun rapport avec les modificateurs public/private/protected.

Ça ne s'applique pas qu'aux classes mais aussi aux fonctions et à toute « entité ». La notion d'entité et de raison de changer est compliquée à définir et dépend de chaque projet.

Exemple : on travaille chez Xami, une épicerie en ligne, on veut calculer le total du panier d'achat, disponible uniquement au Québec. On a déjà une base de code existante avec des tests.
-->
