# `unique symbol`

- Créer un symbole dans TypeScript sans le créer en JavaScript : il n'existera plus après la compilation !
- Autorisé uniquement sur les déclarations `const` et les propriétés `readonly static`

```ts
declare const __brand: unique symbol;
```
