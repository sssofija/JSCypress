import '../../support/commands/common.commands';
import { generateCardDetails } from '../../support/utilities/utilities';
import { locators as loc } from '../../support/locators';

describe('Test Case 16: Place Order - Login before Checkout', () => {
  it('should log in before checkout and successfully place an order', () => {
    cy.openHomePage();
    cy.goToLoginPage();
    cy.validUser();
    cy.get('@newUser').then((user) => {
        cy.logIn(user.email, user.password, user.fullName);
        cy.goToProductsPage();
        cy.get('.product-overlay').first().trigger('mouseover', { force: true });
        cy.contains('Add to cart').first().click();
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
        cy.contains('Review Your Order').should('be.visible');
        cy.get('textarea[name="message"]').type('Please deliver between 9am-5pm');
        cy.contains('Review Your Order').should('be.visible');
        cy.get('textarea[name="message"]').type('Order ASAP, please.');
        cy.contains('Place Order').click();
        const card = generateCardDetails();
        cy.get(loc.PaymentLocators.nameOnCard).type(card.name);
        cy.get(loc.PaymentLocators.cardNumber).type(card.number);
        cy.get(loc.PaymentLocators.cvc).type(card.cvc);
        cy.get(loc.PaymentLocators.expiryMonth).type(card.expMonth);
        cy.get(loc.PaymentLocators.expiryYear).type(card.expYear);
        cy.contains('Pay and Confirm Order').click();
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.deleteAccount();
    });
  });
});

/*Test Case 16: Place Order: Login before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill email, password and click 'Login' button
6. Verify 'Logged in as username' at top
7. Add products to cart
8. Click 'Cart' button
9. Verify that cart page is displayed
10. Click Proceed To Checkout
11. Verify Address Details and Review Your Order
12. Enter description in comment text area and click 'Place Order'
13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
14. Click 'Pay and Confirm Order' button
15. Verify success message 'Your order has been placed successfully!'
16. Click 'Delete Account' button
17. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/