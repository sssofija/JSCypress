import { faker } from '@faker-js/faker';

const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
const randomCountry = countries[Math.floor(Math.random() * countries.length)];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function generateEmail(firstName, lastName) {
  return faker.internet.email({ firstName, lastName });
}

export function generatePassword() {
  return faker.internet.password({ length: 10, memorable: true });
}

export function generateName() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
}

export function generateUserDetails() {
  const day = faker.number.int({ min: 1, max: 28 }).toString();
  const month = months[Math.floor(Math.random() * months.length)];
  const year = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).getFullYear().toString();

  return {
    company: faker.company.name(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    city: faker.location.city(),
    country: randomCountry,
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    mobile: faker.phone.number('+1 ### ### ####'),
    dateOfBirth: {
      day,
      month,
      year,
    },
  };
};


// Простая функция для генерации случайной строки из букв (a-z), длиной length
function randomAlphaString(length) {
  let result = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Генерация невалидного email
export function generateInvalidEmail(firstName, lastName) {
  const randomInvalidPart = randomAlphaString(5);

  const invalidPatterns = [
    () => `${firstName}${lastName}.com`,                // нет "@"
    () => `${firstName}@${lastName}`,                   // нет домена
    () => `${firstName}@${lastName}..com`,              // двойная точка
    () => `@${lastName}.com`,                           // нет имени
    () => `${firstName}${lastName}@`,                   // нет домена
    () => `${firstName}#${lastName}@example.com`,       // запрещённый символ
    () => `${firstName}${lastName}@${randomInvalidPart}`, // домен без TLD
    () => `${firstName}@.${lastName}.com`,              // точка после "@"
    () => `${firstName}@@${lastName}.com`,              // двойной "@"
  ];

  return invalidPatterns[Math.floor(Math.random() * invalidPatterns.length)]();
}

// Генерация невалидного пароля
export function generateInvalidPassword() {
  const short = randomAlphaString(3);
  const onlySymbols = '!@#$%^&*';
  const whitespace = ' '.repeat(10);
  const noLetters = '12345678';

  const invalidPatterns = [
    () => short,                 // слишком короткий
    () => '',                    // пустая строка
    () => onlySymbols,           // только символы
    () => whitespace,            // только пробелы
    () => noLetters,             // только цифры
    () => 'пароль123',           // кириллица
    () => 'passwordpassword',    // простой пароль
  ];

  return invalidPatterns[Math.floor(Math.random() * invalidPatterns.length)]();
}
