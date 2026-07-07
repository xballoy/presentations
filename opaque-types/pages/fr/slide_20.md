# Type opaque faible

Peut être utilisé soit comme le type opaque, soit comme le type de base.

```ts
export type WeakOpaqueType<BaseType, T> = Branded<BaseType, T>;

type EmailAddress = WeakOpaqueType<string, "EmailAddress">;

const sayHello = (value: string) => `Hello ${value}`;
const sendEmail = (value: EmailAddress) => `Hello ${value}`;

const value = "xavier@kumojin.com";
const email = "xavier@kumojin.com" as EmailAddress;

sayHello(value);
sayHello(email);

// @ts-expect-error
sendEmail(value);
sendEmail(email);
```
