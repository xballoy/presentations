# `unique symbol`

- Create a symbol in TypeScript without creating it in JavaScript: it won't exist after compiling!
- Allowed only on `const` declarations and `readonly static` properties

```ts
declare const __brand: unique symbol;
```
