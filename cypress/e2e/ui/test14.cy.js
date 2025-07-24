import '../../support/commands/common.commands';
import { locators as loc } from '../../support/locators';
import { generateCardDetails } from '../../support/utilities/utilities';

describe('Test Case 14: Place Order: Register while Checkout', () => {
  it('registers during checkout and places an order', () => {
    const cardDetails = generateCardDetails();

    cy.openHomePage();
    cy.goToProductsPage();
    cy.get(loc.ProductsPageLocators.productCard).first().trigger('mouseover');
    cy.get(loc.ProductsPageLocators.addToCartButton).first().click({ force: true });
    cy.contains('Continue Shopping').click();
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get(loc.CartPageLocators.proceedToCheckoutButton).click();
    cy.contains('a', 'Register / Login').click();
    cy.url().should('include', '/login');
    cy.registerNewUser();
    cy.get('@newUser').then((user) => {
      cy.contains(`Logged in as ${user.fullName}`).should('be.visible');
    });
    cy.goToCartPage();
    cy.get(loc.CartPageLocators.proceedToCheckoutButton).click();
    cy.get('.checkout-information').should('be.visible');
    cy.get('textarea[name="message"]').type('Please deliver between 10am–5pm');
    cy.contains('Place Order').click();
    cy.get(loc.PaymentPageLocators.nameOnCardInput).should('be.visible').type(cardDetails.name);
    cy.get(loc.PaymentPageLocators.cardNumberInput).type(cardDetails.number);
    cy.get(loc.PaymentPageLocators.cvcInput).type(cardDetails.cvc);
    cy.get(loc.PaymentPageLocators.expiryMonthInput).type(cardDetails.expMonth);
    cy.get(loc.PaymentPageLocators.expiryYearInput).type(cardDetails.expYear);
    cy.contains('Pay and Confirm Order').click();
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    cy.get(loc.UserAccountPageLocators.userAccountPageDelete).click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
  });
});


/*Test Case 14: Place Order: Register while Checkout
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
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/