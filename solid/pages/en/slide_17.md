# SRP: Single Responsibility Principle

**Symptoms**: Fragility · Rigidity · Viscosity

If a class has more than one responsibility, then the responsibilities become coupled.

**How to identify when it isn't respected**

- Ask why this class/function might change

<!--
Nothing to do with the public/private/protected modifiers.

It doesn't apply only to classes but also to functions and any "entity." The notion of entity and reason to change is hard to define and depends on each project.

Example: we work at Xami, an online grocery store available only in Quebec. We want to calculate the total of the shopping cart. We already have an existing codebase with tests.
-->
