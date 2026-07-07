# DIP — Principe d'inversion des dépendances

**Symptômes** : Fragile · Immobile

- On peut l'appliquer à notre code mais aussi aux librairies que l'on utilise
- Mis en œuvre avec le principe d'inversion de contrôle (IoC)

**Comment identifier s'il n'est pas (ou mal) respecté**

- Une classe dépend d'autres entités concrètes
- Une classe dérive d'une classe concrète

<!--
Exemple basé sur celui du début, avec le GetTotalCart qui est une classe concrète.
-->
