describe('Test Case 21: Add review on product', () => {
  it('should allow user to add a review on a product', () => {
    
    cy.openHamePage();

    // 3. Click on 'Products' button
    cy.contains('Products').click();

    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 5. Click on 'View Product' button (first product)
    cy.get('.product-overlay').first().trigger('mouseover');
    cy.contains('View Product').first().click();

    // 6. Verify 'Write Your Review' is visible
    cy.contains('Write Your Review').should('be.visible');

    // 7. Enter name, email and review
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john@example.com');
    cy.get('#review').type('This is a great product. Highly recommend!');

    // 8. Click 'Submit' button
    cy.get('#button-review').click();

    // 9. Verify success message
    cy.contains('Thank you for your review.').should('be.visible');
  });
});

/*Test Case 21: Add review on product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'*/