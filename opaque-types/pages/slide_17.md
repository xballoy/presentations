# Add domain validation

- Help with the creation of functions that can validate the format of the data
- Examples:
  - Validate an email
  - Ensure a number is positive
  - Ensure an ID is for a specific object

```ts
import { Branded } from "./branded";

export type EmailAddress = Branded<string, "EmailAddress">;

export const isValidEmail = (email: string): email is EmailAddress => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
};

export const sendEmail = (email: EmailAddress) => {
  // TODO: send email
};
```
