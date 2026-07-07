# What are symbols?

- Since ES6, `symbol` is a primitive type like `string` or `number`
- Created using the `Symbol()` function (cannot use `new Symbol()`)
- Symbols are immutable and unique

<!--
In NestJS you can use either a string or a symbol when registering a provider. The benefit of
the symbol is that you are certain to avoid any naming conflict, since symbols are unique.
If you use Symbol.for() to create your symbol, it is shared in a global registry, so add a
prefix to prevent conflicts!
-->
