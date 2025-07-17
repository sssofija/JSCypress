
import { locators as loc } from './locators';

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
  cy.contains('AutomationExercise')
});
Cypress.Commands.add('openTestCasesPage', () => {
  cy.contains(loc.HomePageLocators.testCasesLink, 'Test Cases').click();
  cy.contains("Test Cases")
});

Cypress.Commands.add('openLoginPage', () => {
  cy.get(loc.HomePageLocators.signupLoginLink).click()
  cy.contains('New User Signup!')
});

