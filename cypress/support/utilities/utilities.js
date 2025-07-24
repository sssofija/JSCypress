import { faker } from '@faker-js/faker';

export const generateCardDetails = () => {
  return {
    name: faker.name.fullName(),
    number: faker.finance.creditCardNumber('#### #### #### ####'),
    cvc: faker.string.numeric(3),
    expMonth: faker.string.numeric({ length: 2, min: 1, max: 12 }),
    expYear: String(faker.date.future().getFullYear()),
  };
};
