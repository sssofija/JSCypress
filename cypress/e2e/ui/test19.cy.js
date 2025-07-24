describe('Test Case 19: View & Cart Brand Products', () => {
  it('should navigate to brand pages and verify products', () => {
    
    cy.openHomePage();
    cy.contains('Products').click();
    cy.get('.brands_products').should('be.visible');
    cy.get('.brands_products').within(() => {
      cy.get('ul li').should('have.length.greaterThan', 0);
    });

    cy.get('.brands_products ul li a').first().then(($brand) => {
      const brandName1 = $brand.text().trim();
      cy.wrap($brand).click();
      cy.url().should('include', 'brand_products');
      cy.get('.features_items').should('be.visible');
      cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
      cy.contains(brandName1).should('be.visible');
      cy.get('.brands_products ul li a').eq(1).then(($brand2) => {
        const brandName2 = $brand2.text().trim();
        cy.wrap($brand2).click();
        cy.url().should('include', 'brand_products');
        cy.get('.features_items').should('be.visible');
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
        cy.contains(brandName2).should('be.visible');
      });
    });
  });
});

/*Test Case 19: View & Cart Brand Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products*/