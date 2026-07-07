# Our final type

```ts
// branded.ts
declare const __brand: unique symbol;
type Brand<T> = { [__brand]: T };

export type Branded<BaseType, T> = BaseType & Brand<T>;
```
