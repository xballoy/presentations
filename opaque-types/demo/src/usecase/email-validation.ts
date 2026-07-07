import { Branded } from '../branded';

export type EmailAddress = Branded<string, 'EmailAddress'>;

export const isValidEmail = (email: string): email is EmailAddress => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
};

export const assertValidEmail = (
  email: string,
): asserts email is EmailAddress => {
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email)) {
    throw new Error(`${email} is not a valid email`);
  }
};

export const sendEmail = (email: EmailAddress) => {
  // TODO: send email
};
