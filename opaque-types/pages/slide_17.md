# Add domain validation

- Help create functions that validate the data's format
- Examples:
  - Validate an email
  - Ensure a number is positive
  - Ensure an ID refers to a specific object

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
