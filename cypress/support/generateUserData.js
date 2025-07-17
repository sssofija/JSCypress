import { faker } from '@faker-js/faker';
const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
const randomCountry = countries[Math.floor(Math.random() * countries.length)];


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
  return {
    company: faker.company.name(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    city: faker.location.city(),
    country: randomCountry,
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    mobile: faker.phone.number('+1 ### ### ####'),
  };
}
