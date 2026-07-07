import { describe, expect, it } from 'vitest';
import { sendEmail, isValidEmail, assertValidEmail } from './email-validation';

describe('Email validation', () => {
  it('should throw an error when invalid email', () => {
    expect(() => assertValidEmail('not an email')).toThrowError();
  });

  it('should return EmailAddress type when valid email', () => {
    const value = 'xavier@kumojin.com';
    // @ts-expect-error
    sendEmail(value);

    if (isValidEmail(value)) {
      sendEmail(value);
    }
  });
});
