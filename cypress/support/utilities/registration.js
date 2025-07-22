import { faker } from '@faker-js/faker';
import { generateEmail, generatePassword } from './auth';

const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

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

export function generateName() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
};

export function generateUserDetails() {
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
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
    day,
    month,
    year,
  };
}
