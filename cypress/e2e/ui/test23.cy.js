import '../../support/commands/common.commands';

describe('Test Case 23: Verify address details in checkout page', () => {
  it('should verify delivery and billing address on checkout page', () => {
    cy.registerNewUser().then(() => {
      cy.get('@newUser').then(user => {
        cy.openHomePage();
        cy.contains(`Logged in as ${user.fullName}`).should('be.visible');
        cy.goToProductsPage();
        cy.get('.product-overlay').first().trigger('mouseover', {force: true});
        cy.contains('Add to cart').first().click();
        cy.get('.modal-content').should('be.visible');
        cy.contains('Continue Shopping').click();
        cy.goToCartPage();
        cy.url().should('include', '/view_cart');
        cy.contains('Shopping Cart').should('be.visible');
        cy.contains('Proceed To Checkout').click();
        cy.get('.address_firstname.address_lastname').should('contain', user.fullName);
        cy.get('.address_address1.address_address2').eq(0).should('contain', user.details.company);
        cy.get('.address_address1.address_address2').eq(1).should('contain', user.details.address);
        cy.get('.address_city.address_state_name.address_postcode')
              .should('contain', user.details.city)
              .and('contain', user.details.state)
              .and('contain', user.details.zip);
        cy.get('.address_country_name').should('contain', user.details.country);
        cy.get('.address_phone').should('contain', user.details.mobile);

        cy.deleteAccount();
      });
    });
  });
});

/*Test Case 23: Verify address details in checkout page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/