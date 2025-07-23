import { locators as loc } from '../locators';


Cypress.Commands.add('searchProduct', (randomProduct) =>{
    cy.get(loc.ProductsPageLocators.searchInput).type(randomProduct);
      cy.get(loc.ProductsPageLocators.searchButton).click();

});

Cypress.Commands.add('verifyProductDetailsPage', () => {
  cy.url().should('include', '/product_details/');
  cy.get('.product-information h2').should('be.visible');
  cy.get('.product-information p').contains('Category').should('be.visible');
  cy.get('.product-information span').contains('Rs.').should('be.visible');
  cy.get('.product-information p').contains('Availability').should('be.visible');
  cy.get('.product-information p').contains('Condition').should('be.visible');
  cy.get('.product-information p').contains('Brand').should('be.visible');
});
