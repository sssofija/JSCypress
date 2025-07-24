describe('Test Case 17: Remove Products From Cart', () => {
  it('should add products to cart and remove them', () => {
 
    cy.openHomePage();
    cy.get('.product-overlay').first().trigger('mouseover', {force:true});
    cy.contains('Add to cart').first().click();
    cy.get('.modal-content').should('be.visible');
    cy.contains('Continue Shopping').click();
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');
    cy.get('.cart_quantity_delete').first().click();
    cy.get('.cart_info').should('not.contain', 'Blue Top');
  });
});

/*Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart*/