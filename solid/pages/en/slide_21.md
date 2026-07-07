# LSP: Liskov Substitution Principle

**Symptom**: Fragility

Implementations of an abstraction cannot be validated in isolation, but only in the context of their client.

**How to identify when it isn't respected**

- A function has less behavior than the one it inherits from
- A function `throw`s exceptions but the one it inherits from doesn't

<!--
Named after Barbara Liskov, an American computer scientist. Describes how subtypes must be usable in place of their supertypes without breaking the program's functionality. We talk about subtype, not subclass: a subclass relationship does not imply a subtype.

3 rules: same signature, same method conditions, same class properties.

With typed languages, this helps to some extent: we cannot return incompatible types, nor throw more generic exceptions (if we have checked exceptions).
-->
