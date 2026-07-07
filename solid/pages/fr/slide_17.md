# SRP : Principe de responsabilité unique

**Symptômes** : Fragile · Rigide · Visqueux

Si une classe a plus d'une responsabilité, alors les responsabilités deviennent couplées.

**Comment identifier s'il n'est pas respecté**

- Se demander pourquoi cette classe/fonction pourrait changer

<!--
Aucun rapport avec les modificateurs public/private/protected.

Ça ne s'applique pas qu'aux classes mais aussi aux fonctions et à toute « entité ». La notion d'entité et de raison de changer est compliquée à définir et dépend de chaque projet.

Exemple : on travaille chez Xami, une épicerie en ligne disponible uniquement au Québec. On veut calculer le total du panier d'achat. On a déjà une base de code existante avec des tests.
-->
