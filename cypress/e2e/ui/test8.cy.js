import '../../support/commands'

describe('Verify Test Cases Page', () => {
it('Verify Test Cases Page', () => {
    cy.openHomePage();
    cy.contains('Products').click();
    cy.contains("All Products");
    cy.get('.product-overlay')
      .should('have.length.greaterThan', 0)
      .and('be.visible');
    cy.get('a[href^="/product_details/"]').first().click();
    cy.url().should('include', '/product_details/');
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p')
      .contains('Category')
      .should('be.visible');
    cy.get('.product-information span')
      .contains('Rs.')
      .should('be.visible');
    cy.get('.product-information p')
        .contains('Availability')
        .should('be.visible');
    cy.get('.product-information p')
        .contains('Condition')
        .should('be.visible');
    cy.get('.product-information p')
        .contains('Brand')
        .should('be.visible');
   
});
})

/*Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand*/