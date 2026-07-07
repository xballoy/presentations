import { SuperOpaqueType } from '../branded';

type EmailAddress = SuperOpaqueType<string, 'EmailAddress'>;

const sayHello = (value: string) => `Hello ${value}`;
const sendEmail = (value: EmailAddress) => `Hello ${value}`;

const value = 'xavier@kumojin.com';
const email = 'xavier@kumojin.com' as any as EmailAddress;

sayHello(value);
sayHello(email as any as string);

// @ts-expect-error
sendEmail(value);
sendEmail(email);
