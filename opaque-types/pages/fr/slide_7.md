# Définir un nouveau type

- Une fonctionnalité native dans Flow, mais qui n'existe pas dans TypeScript
- Réalisé en ajoutant une étiquette à un type existant afin de créer un nouveau type plus spécifique

```ts
type Brand<BaseType, Name> = BaseType & { __brand: Name };
type UserId = Brand<string, "UserId">;
```
