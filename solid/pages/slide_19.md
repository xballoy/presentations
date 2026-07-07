# OCP : Principe ouvert-fermé

**Symptôme** : Rigide

**Comment**

- Utiliser des abstractions
- Ne pas faire d'abstraction prématurément pour éviter la complexité inutile

**Comment identifier s'il n'est pas (ou mal) respecté**

- Si on fait des `if/else` sur un type pour avoir un comportement différent selon le cas

<!--
OPEN : on peut modifier le comportement d'une entité logicielle sans devoir la modifier.
CLOSE : le code d'un module ne doit pas être modifié pour lui ajouter un nouveau comportement.

Contre-intuitif, mais facile en utilisant des abstractions : si on référence une abstraction, on peut changer l'implémentation sans changer le module qui la référence. Lié à l'inversion des dépendances (D), mis en place avec différents patterns (factory, IoC...).

Exemple : on agrandit notre marché, maintenant on vend aussi en Alberta, donc on calcule le total en fonction de la province.
-->
