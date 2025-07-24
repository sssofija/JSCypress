describe('Test Case 18: View Category Products', () => {
  it('should view category and sub-category products', () => {
    
    cy.openHomePage();
    cy.get('.left-sidebar').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('.panel-title', 'Women').within(() => {
      cy.get('a').first().click();
    });
    cy.get('.panel-collapse.collapse.in').within(() => {
      cy.contains('Dress').click();
    });
    cy.url().should('include', 'category_products');
    cy.contains('WOMEN - TOPS PRODUCTS').should('be.visible');
    cy.contains('.panel-title', 'Men').within(() => {
      cy.get('a').first().click();
    });
    cy.url().should('include', 'category_products');
    cy.get('h2.title.text-center').should('be.visible');
  });
});

/*Test Case 18: View Category Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page*/