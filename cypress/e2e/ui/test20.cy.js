import '../../support/commands/common.commands';
import { locators as loc } from '../../support/locators';


describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  it('should persist searched products in cart after login', () => {
    cy.openHomePage();
    cy.goToProductsPage();
    cy.fixture('productlist').then((products) => {
      const randomProduct = Cypress._.sample(products);
      cy.searchProduct(randomProduct);
      cy.contains('Searched Products').should('be.visible');
      cy.contains(randomProduct).should('be.visible');
      cy.get('.product-overlay').first().trigger('mouseover', {force: true});
      cy.contains('Add to cart').first().click();
      cy.contains('Continue Shopping').click();
      cy.goToCartPage();
      cy.contains(randomProduct).should('be.visible');
      cy.validUser();
      cy.get('@newUser').then((user) => {
        cy.logIn(user.email, user.password, user.fullName);
        cy.goToCartPage();
        cy.contains(randomProduct).should('be.visible');
      });
    });
  });
});

/*Test Case 20: Search Products and Verify Cart After Login
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well*/