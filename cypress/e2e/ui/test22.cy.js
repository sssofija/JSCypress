describe('Test Case 22: Add to cart from Recommended items', () => {
  it('should add recommended product to cart and verify it in the cart page', () => {

    cy.openHomePage();
    cy.scrollTo('bottom');
    cy.contains('RECOMMENDED ITEMS').should('be.visible');
    cy.get('.recommended_items .item-carousel')
      .first()
      .within(() => {
        cy.contains('Add to cart').click();
      });
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');
    cy.get('.cart_description').should('contain.text', 'Blue Top');
  });
});

/*Test Case 22: Add to cart from Recommended items
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page*/