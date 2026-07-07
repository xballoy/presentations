import { Branded } from '../branded';

type EmailAddress = Branded<string, 'EmailAddress'>;

const sayHello = (value: string) => `Hello ${value}`;
const sendEmail = (value: EmailAddress) => `Hello ${value}`;

const value = 'xavier@kumojin.com';
const email = 'xavier@kumojin.com' as EmailAddress;

sayHello(value);
sayHello(email);

// @ts-expect-error
sendEmail(value);
sendEmail(email);
