# Basic usage (not recommended)

Cast your value as the opaque type.

```ts
type EmailAddress = string & { readonly __brand: unique symbol };

const value = "xavier@kumojin.com";
const email = value as EmailAddress;

export const sendEmail = (email: EmailAddress) => {
  // TODO: send email
};

// @ts-expect-error
// Argument of type string is not assignable to parameter of type EmailAddress
sendEmail(value);

sendEmail(email);
```
