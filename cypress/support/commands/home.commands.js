
import { locators as loc } from '../locators';

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
  cy.contains('AutomationExercise');
  cy.get('body').should('be.visible');

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

Cypress.Commands.add('goToContactUsPage', () =>{
  cy.get(loc.HomePageLocators.contactUsLink).click();
  cy.contains('Get In Touch');
});

Cypress.Commands.add('goToProductsPage', () =>{
  cy.get(loc.HomePageLocators.productsLink).click();
  cy.contains('All Products');
  cy.get('.product-overlay')
      .should('have.length.greaterThan', 0)
      .and('be.visible');
});

Cypress.Commands.add('goToCartPage', () => {
    cy.get(loc.HomePageLocators.cartLink).first().click();
    cy.contains('Shopping Cart');
});