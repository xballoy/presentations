import { Branded } from '../branded';

export type EmailAddress = string & { readonly __brand: unique symbol };
export type EmailAddress2 = string & { readonly __brand: unique symbol };
const value = 'xavier@kumojin.com';
const email = value as EmailAddress;
const email2 = value as EmailAddress2;
if(email === email2){}

export const sendEmail = (email: EmailAddress) => {
  // TODO: send email
};

// @ts-expect-error
// Argument of type string is not assignable to parameter of type EmailAddress
sendEmail(value);

sendEmail(email);
