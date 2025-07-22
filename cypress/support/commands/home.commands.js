
import { locators as loc } from '../locators';

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
  cy.contains('AutomationExercise')
});
Cypress.Commands.add('goToTestCasesPage', () => {
  cy.contains(loc.HomePageLocators.testCasesLink, 'Test Cases').click();
  cy.contains("Test Cases")
});

Cypress.Commands.add('goToLoginPage', () => {
    cy.get(loc.HomePageLocators.signupLoginLink).click();
    cy.contains('Login to your account');
});

Cypress.Commands.add('goToSignupPage', () => {
    cy.get(loc.HomePageLocators.signupLoginLink).click();
    cy.contains('New User Signup!');
});
