// support/patterns.js

export const invalidEmailPatterns = [
  (firstName, lastName, randomInvalidPart) => `${firstName}${lastName}.com`,
  (firstName, lastName, randomInvalidPart) => `${firstName}@${lastName}`,
  (firstName, lastName, randomInvalidPart) => `${firstName}@${lastName}..com`,
  (firstName, lastName, randomInvalidPart) => `@${lastName}.com`,
  (firstName, lastName, randomInvalidPart) => `${firstName}${lastName}@`,
  (firstName, lastName, randomInvalidPart) => `${firstName}#${lastName}@example.com`,
  (firstName, lastName, randomInvalidPart) => `${firstName}${lastName}@${randomInvalidPart}`,
  (firstName, lastName, randomInvalidPart) => `${firstName}@.${lastName}.com`,
  (firstName, lastName, randomInvalidPart) => `${firstName}@@${lastName}.com`,
];

export const invalidPasswordPatterns = [
  () => '123',
  () => 'password',
  () => '      ',
  () => 'abcdefg',
  () => '1234567',
  () => 'abc123',
  () => '!!!!!!!',
  () => 'abc def123',
];
