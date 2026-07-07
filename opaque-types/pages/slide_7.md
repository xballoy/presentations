# Defining a new type

- Native feature in Flow but does not exist in TypeScript
- Accomplished by adding a tag to an existing type to create a new, more specific type

```ts
type Brand<BaseType, Name> = BaseType & { __brand: Name };
type UserId = Brand<string, "UserId">;
```
