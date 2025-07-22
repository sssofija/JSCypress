import { faker } from '@faker-js/faker';
import { invalidEmailPatterns, invalidPasswordPatterns } from './patterns'
import { generateUserDetails, generateName } from './newUserData'

function randomAlphaString(length) {
  let result = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export function createUser() {
  const { firstName, lastName } = generateName();
  const fullName = `${firstName} ${lastName}`;
  const email = generateEmail(firstName, lastName, { valid: true });
  const password = generatePassword({ valid: true });
  const details = generateUserDetails();

  return {
    firstName,
    lastName,
    fullName,
    email,
    password,
    details,
    day: details.day,
    month: details.month,
    year: details.year,
  };
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
    // Валидный пароль — длина 8+, включает буквы, цифры и символы
    return faker.internet.password(12, true, /[A-Za-z0-9!@#$%^&*]/, 'A1!');
  }

  const pattern = invalidPasswordPatterns[Math.floor(Math.random() * invalidPasswordPatterns.length)];
  return pattern();
};

