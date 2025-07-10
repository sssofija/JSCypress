describe('Verify Test Cases Page', () => {
it('Verify Test Cases Page', () => {
    cy.visit('http://automationexercise.com')
    cy.contains("AutomationExercise");
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