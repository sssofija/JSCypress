import '../../support/commands/common.commands';

describe('Test Case 13: Verify Product quantity in Cart', () => {
  it('adds product with specific quantity and verifies it in cart', () => {
    
    cy.openHomePage();
    cy.get('#slider').should('be.visible');

    cy.contains('View Product').first().click();
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').should('be.visible');

    cy.get('#quantity').clear().type('4');
    cy.contains('button', 'Add to cart').click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('View Cart').should('be.visible').click();

    cy.get('.cart_quantity button.disabled').should('have.text', '4');
  });
});


/*Test Case 13: Verify Product quantity in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity*/