import '../../support/commands/common.commands';
import { locators as loc } from '../../support/locators';
import { generateCardDetails } from '../../support/utilities/utilities';

describe('Test Case 24: Download Invoice after purchase order', () => {
  it('should complete purchase and download invoice', () => {
    const card = generateCardDetails();

    cy.validUser();

    cy.get('@newUser').then(user => {
      cy.logIn(user.email, user.password, user.fullName);
      cy.openHomePage();
      cy.goToProductsPage();
      cy.get('.product-overlay').first().trigger('mouseover', { force: true });
      cy.contains('Add to cart').first().click();
      cy.get('.modal-content').should('be.visible');
      cy.contains('Continue Shopping').click();
      cy.goToCartPage();
      cy.contains('Proceed To Checkout').click();
      cy.contains('Address Details').should('be.visible');
      cy.contains('Review Your Order').should('be.visible');
      cy.get('textarea[name="message"]').type('Please deliver between 9am-5pm');
      cy.contains('Place Order').click();
      cy.get(loc.PaymentPageLocators.nameOnCardInput).type(card.name);
      cy.get(loc.PaymentPageLocators.cardNumberInput).type(card.number);
      cy.get(loc.PaymentPageLocators.cvcInput).type(card.cvc);
      cy.get(loc.PaymentPageLocators.expiryMonthInput).type(card.expMonth);
      cy.get(loc.PaymentPageLocators.expiryYearInput).type(card.expYear);
      cy.contains('Pay and Confirm Order').click();
      cy.contains('Order Placed!').should('be.visible');
      cy.contains('Download Invoice').should('be.visible').click();
      cy.contains('Continue').click();

      cy.deleteAccount();
    });
  });
});

/*Test Case 24: Download Invoice after purchase order
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
21. Click 'Delete Account' button
22. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/