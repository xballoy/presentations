# Utilisation basique (non recommandée)

Castez votre valeur en tant que type opaque.

```ts
type EmailAddress = string & { readonly __brand: unique symbol };

const value = "xavier@kumojin.com";
const email = value as EmailAddress;

export const sendEmail = (email: EmailAddress) => {
  // TODO : envoyer l'email
};

// @ts-expect-error
// Argument of type string is not assignable to parameter of type EmailAddress
sendEmail(value);

sendEmail(email);
```
