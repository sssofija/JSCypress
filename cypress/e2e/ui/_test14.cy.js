import '../../support/commands/common.commands';

describe('Test Case 14: Place Order: Register while Checkout', () => {
  const user = {
    name: 'TestUser',
    email: `test${Date.now()}@example.com`,
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Test St',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zip: 'M4B1B3',
    mobile: '1234567890',
    cardName: 'John Doe',
    cardNumber: '4111111111111111',
    cvc: '123',
    expMonth: '12',
    expYear: '2026'
  };

  it('registers during checkout and places an order', () => {
    cy.visit('https://automationexercise.com');
    cy.get('#slider').should('be.visible');
    cy.contains('Products').click();
    cy.get('.product-overlay').first().invoke('show');
    cy.get('.add-to-cart').first().click({ force: true });
    cy.contains('Continue Shopping').click();
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.contains('Proceed To Checkout').click();
    cy.contains('Register / Login').click();
    cy.url().should('include', '/login');
    cy.contains('New User Signup!').should('be.visible');
    cy.get('[data-qa="signup-name"]').should('be.visible').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#country').select(user.country);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zip);
    cy.get('#mobile_number').type(user.mobile);
    cy.get('[data-qa="create-account"]').click();
    cy.contains('ACCOUNT CREATED!').should('be.visible');
    cy.contains('Continue').click();
    cy.get('a').contains(`Logged in as ${user.name}`).should('be.visible');
    cy.contains('Cart').click();
    cy.contains('Proceed To Checkout').click();
    cy.get('.checkout-information').should('be.visible');
    cy.get('textarea[name="message"]').type('Please deliver between 10am–5pm');
    cy.contains('Place Order').click();
    cy.get('[name="name_on_card"]').type(user.cardName);
    cy.get('[name="card_number"]').type(user.cardNumber);
    cy.get('[name="cvc"]').type(user.cvc);
    cy.get('[name="expiry_month"]').type(user.expMonth);
    cy.get('[name="expiry_year"]').type(user.expYear);
    cy.contains('Pay and Confirm Order').click();
    cy.contains('Your order has been placed successfully!').should('be.visible');
    cy.contains('Delete Account').click();
    cy.contains('ACCOUNT DELETED!').should('be.visible');
    cy.contains('Continue').click();
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