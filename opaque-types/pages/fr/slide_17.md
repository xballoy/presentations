# Ajouter une validation de domaine

- Aide à créer des fonctions qui valident le format des données
- Exemples :
  - Valider un email
  - S'assurer qu'un nombre est positif
  - S'assurer qu'un ID fait référence à un objet spécifique

```ts
import { Branded } from "./branded";

export type EmailAddress = Branded<string, "EmailAddress">;

export const isValidEmail = (email: string): email is EmailAddress => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
};

export const sendEmail = (email: EmailAddress) => {
  // TODO : envoyer l'email
};
```
