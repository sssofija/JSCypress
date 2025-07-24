describe('Test Case 18: View Category Products', () => {
  it('should view category and sub-category products', () => {
    // 1. Launch browser & 2. Navigate to url
    cy.visit('http://automationexercise.com');

    // 3. Verify that categories are visible on left side bar
    cy.get('.left-sidebar').should('be.visible');
    cy.contains('Category').should('be.visible');

    // 4. Click on 'Women' category
    cy.contains('.panel-title', 'Women').within(() => {
      cy.get('a').first().click();
    });

    // 5. Click on any category link under 'Women' category, e.g. Dress
    cy.get('.panel-collapse.collapse.in').within(() => {
      cy.contains('Dress').click();
    });

    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.url().should('include', 'category_products');
    cy.contains('WOMEN - TOPS PRODUCTS').should('be.visible');

    // 7. On left side bar, click on any sub-category link of 'Men' category
    cy.contains('.panel-title', 'Men').within(() => {
      cy.get('a').first().click();
    });

    // 8. Verify that user is navigated to that category page
    cy.url().should('include', 'category_products');
    // Можно добавить проверку на наличие текста, например 'MEN - TSHIRTS PRODUCTS'
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