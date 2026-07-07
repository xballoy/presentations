# What are Symbols?

- Since ES6, `symbol` is a primitive type like `string` or `number`
- Created using the `Symbol()` function (cannot use `new Symbol()`)
- Symbols are immutable and unique

<!--
In NestJS you can use either a string or a symbol when providing a provider. The benefit of
the symbol is that you are certain not to have any conflict on the name, since they are unique.
If you use Symbol.for() to create your symbol, they are shared in a global registry, so add a
prefix to prevent conflicts!
-->
