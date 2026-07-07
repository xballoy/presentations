# OCP: Open/Closed Principle

**Symptom**: Rigidity

**How**

- Use abstractions
- Don't create abstractions prematurely, to avoid needless complexity

**How to identify when it isn't respected (or poorly respected)**

- If we use `if/else` on a type to get different behavior depending on the case

<!--
OPEN: we can change the behavior of a software entity without having to modify it.
CLOSED: the code of a module should not be modified to add new behavior to it.

Counter-intuitive, but easy to achieve using abstractions: if we reference an abstraction, we can change the implementation without changing the module that references it. Related to dependency inversion (D), implemented with different patterns (factory, IoC...).

Example: we're expanding our market, now we also sell in Alberta, so we calculate the total based on the province.
-->
