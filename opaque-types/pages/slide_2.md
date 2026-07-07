# TypeScript: a static type checker

- Check the types at compile-time
- Prevent data type errors

```ts
const increment = (value: number) => value + 1;

// @ts-expect-error
increment("1");
```
