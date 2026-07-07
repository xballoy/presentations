# Utilisation basique (non recommandée)

Convertissez votre valeur en type opaque à l'aide d'un cast.

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
