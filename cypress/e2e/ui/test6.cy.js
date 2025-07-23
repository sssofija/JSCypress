import 'cypress-file-upload';
import { locators as loc } from '../../support/locators';
import '../../support/commands';
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

/*Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully*/