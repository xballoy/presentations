# DIP: Dependency Inversion Principle

**Symptoms**: Fragility · Immobility

- We can apply it to our own code but also to the libraries we use
- Implemented with the Inversion of Control (IoC) principle

**How to identify when it isn't respected (or poorly respected)**

- A class depends on other concrete entities
- A class derives from a concrete class

<!--
Example based on the one from the beginning, with GetTotalCart being a concrete class.
-->
