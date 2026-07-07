# ISP: Interface Segregation Principle

**Symptoms**: Fragility · Rigidity · Needless Complexity

An interface that is too broad creates needless coupling, but be careful not to over-split it!

**How to identify when it isn't respected**

- If a class contains unused methods coming from an interface, the interface is poorly segregated

<!--
Example: we add overly specific CartActions.
-->
