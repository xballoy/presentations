# TypeScript : un vérificateur de types statique

- Vérifie les types à la compilation
- Empêche les erreurs liées aux types de données

```ts
const increment = (value: number) => value + 1;

// @ts-expect-error
increment("1");
```
