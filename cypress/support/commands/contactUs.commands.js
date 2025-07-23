// cypress/support/commands.js
import { generateName } from '../utilities/registration';
import { generateEmail } from '../utilities/auth';
import { faker } from '@faker-js/faker';

Cypress.Commands.add('fillContactUsForm', ({ validEmail = true } = {}) => {
  const { firstName, lastName, fullName } = generateName();
  const email = generateEmail(firstName, lastName, { valid: validEmail });

  const subject = faker.lorem.sentence();        
  const message = faker.lorem.paragraphs(2);   

  cy.get(loc.ContactUsPageLocators.nameInput).type(fullName);
  cy.get(loc.ContactUsPageLocators.emailInput).type(email);
  cy.get(loc.ContactUsPageLocators.subjectInput).type(subject);
  cy.get(loc.ContactUsPageLocators.messageTextarea).type(message);
});

Cypress.Commands.add('goToHomePage', () => {
    cy.get(loc.ContactUsPageLocators.homeButton).click();
    cy.contains('AutomationExercise');
})
