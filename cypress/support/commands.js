// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { HomePageLocators } from './locators/HomePageLocators';

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
  cy.contains('AutomationExercise')
});
Cypress.Commands.add('openTestCasesPage', () => {
  cy.contains(HomePageLocators.testCasesLink, 'Test Cases').click();
  cy.contains("Test Cases")
});

Cypress.Commands.add('openLoginPage', () => {
  cy.get(signupLoginLink).click()
  cy.contains('New User Signup!')
});

