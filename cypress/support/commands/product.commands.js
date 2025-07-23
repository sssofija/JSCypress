import { locators as loc } from '../locators';


Cypress.Commands.add('searchProduct', (randomProduct) =>{
    cy.get(loc.ProductsPageLocators.searchInput).type(randomProduct);
      cy.get('button[type="submit"]').click();

});