import 'cypress-file-upload';
import { locators as loc } from '../support/locators';
import '../support/commands';
import { faker } from '@faker-js/faker';

describe('Contact Us Form', () => {
  it('Пользователь успешно отправляет форму обратной связи', () => {
    const name = faker.person.firstName();
    const email = faker.internet.email({ firstName: name });

    cy.openHomePage();
    cy.goToContactUsPage();

    cy.get(loc.ContactUsPageLocators.nameInput).type(name);
    cy.get(loc.ContactUsPageLocators.emailInput).type(email);
    cy.get(loc.ContactUsPageLocators.subjectInput).type('Hello');
    cy.get(loc.ContactUsPageLocators.messageTextarea).type('test123');

    cy.get(loc.ContactUsPageLocators.uploadInput).attachFile('test_upload.txt');
    cy.get(loc.ContactUsPageLocators.submitButton).click();

    cy.on('window:confirm', (text) => {
      expect(text).to.eq('Press OK to proceed!');
      return true;
    });

    cy.contains('Success! Your details have been submitted successfully.');
    cy.get(loc.ContactUsPageLocators.homeButton).click();
    cy.contains('AutomationExercise');
  });
});
