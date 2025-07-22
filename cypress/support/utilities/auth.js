import { faker } from '@faker-js/faker';
import { invalidEmailPatterns, invalidPasswordPatterns } from './patterns'

function randomAlphaString(length) {
  let result = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export function generateEmail(firstName, lastName, { valid = true } = {}) {
  if (valid) {
    return faker.internet.email({ firstName, lastName });
  }
  const randomInvalidPart = randomAlphaString(5);
  const pattern = invalidEmailPatterns[Math.floor(Math.random() * invalidEmailPatterns.length)];
  return pattern(firstName, lastName, randomInvalidPart);
};

export function generatePassword({ valid = true } = {}) {
  if (valid) {
    return faker.internet.password(12, true, /[A-Za-z0-9!@#$%^&*]/, 'A1!');
  }
  const pattern = invalidPasswordPatterns[Math.floor(Math.random() * invalidPasswordPatterns.length)];
  return pattern();
};

