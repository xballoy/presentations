# ISP — Principe de Ségrégation des Interfaces

**Symptômes** : Fragile · Rigide · Complexité inutile

Crée un couplage inutile — mais attention à ne pas sur-découper !

**Comment identifier s'il n'est pas respecté**

- Si une classe contient des méthodes non utilisées qui viennent d'une interface, c'est que l'interface est mal découplée

<!--
Exemple : on ajoute des CartActions trop spécifiques.
-->
