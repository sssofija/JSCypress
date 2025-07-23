describe('Debug adding two products to cart', () => {
  it('adds two products and verifies them in cart', () => {
    cy.visit('http://automationexercise.com');
    cy.contains('Products').click();

    // Добавляем первый товар
    cy.get('.product-overlay').eq(0).invoke('show');
    cy.get('.add-to-cart').eq(0).scrollIntoView().click({ force: true });
    cy.get('.modal-content').should('be.visible');
    cy.log('Первый товар добавлен');
    cy.contains('Continue Shopping').click();

    cy.wait(1500);

    // Добавляем второй товар
    cy.get('.product-overlay').eq(1).invoke('show');
    cy.get('.add-to-cart').eq(1).scrollIntoView().click({ force: true });
    cy.get('.modal-content').should('be.visible').then(() => {
      cy.log('Второй товар добавлен');
    });

    /*cy.contains('View Cart').click();

    cy.url().should('include', '/view_cart');
    cy.get('.cart_info', { timeout: 10000 }).should('be.visible');

    cy.get('.cart_info table tbody tr').then(rows => {
      cy.log('Количество строк в корзине: ' + rows.length);
    });

    // Пауза, чтобы визуально проверить
    cy.wait(2000);

    // Проверка товаров
    cy.get('.cart_info table tbody tr').should('have.length.at.least', 3);*/
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