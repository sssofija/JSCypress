import '../../support/commands/common.commands';

describe('Test Case 12: Add Products in Cart', () => {
  it('adds two products and verifies prices, quantity, and total', () => {
    let firstProductName = '';
    let secondProductName = '';

    cy.visit('https://automationexercise.com');
    cy.get('#slider').should('be.visible');
    cy.contains('Products').click();

    cy.get('.product-image-wrapper').eq(0).within(() => {
      cy.get('.productinfo p').invoke('text').then(text => {
        firstProductName = text.trim();
      });
      cy.get('.product-overlay').invoke('show');
      cy.get('.product-overlay .add-to-cart').click({ force: true });
    });

    cy.get('.modal-content').should('be.visible');
    cy.contains('Continue Shopping').click();
    cy.wait(1000);

    cy.get('.product-image-wrapper').eq(1).within(() => {
      cy.get('.productinfo p').invoke('text').then(text => {
        secondProductName = text.trim();
      });
      cy.get('.product-overlay').invoke('show');
      cy.get('.product-overlay .add-to-cart').click({ force: true });
    });

    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').click();

    cy.get('.cart_info').should('be.visible');
    cy.get('.cart_description').then($cart => {
      expect($cart.text()).to.include(firstProductName);
      expect($cart.text()).to.include(secondProductName);
    });

    cy.get('td.cart_price > p').each(($el) => {
      cy.wrap($el).invoke('text').should('include', 'Rs.');
    });

    cy.get('.cart_quantity').each(($el) => {
      cy.wrap($el).should('contain', '1');
    });

    cy.get('td.cart_total > p').each(($el) => {
      cy.wrap($el).invoke('text').should('include', 'Rs.');
    });
  });
});



/*Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price*/