# LSP : Principe de substitution de Liskov

**Symptôme** : Fragile

Les implémentations d'une abstraction ne peuvent pas être validées de manière isolée, mais uniquement dans le contexte de leur client.

**Comment identifier s'il n'est pas respecté**

- Une fonction a moins de comportement que celle dont elle hérite
- Une fonction `throw` des exceptions mais pas celle dont elle hérite

<!--
Doit son nom à Barbara Liskov, informaticienne américaine. Décrit la manière dont les sous-types doivent pouvoir être utilisés à la place de leurs supertypes sans rompre la fonctionnalité du programme. On parle de sous-type, pas de sous-classe : une relation de sous-classe n'implique pas un sous-type.

3 règles : même signature, mêmes conditions de méthode, mêmes propriétés de classe.

Avec les langages typés, ça aide en partie : on ne peut pas retourner des types incompatibles ni throw des exceptions plus génériques (si on a des checked exceptions).
-->
