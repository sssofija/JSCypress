describe('Test Case 17: Remove Products From Cart', () => {
  it('should add products to cart and remove them', () => {
    // 1. Launch browser & 2. Navigate to url
    cy.visit('http://automationexercise.com');

    // 3. Verify that home page is visible successfully
    cy.get('body').should('be.visible');
    cy.url().should('include', 'automationexercise');

    // 4. Add products to cart (добавим первый продукт)
    cy.get('.product-overlay').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    // Подтвердить добавление (если появляется модальное окно)
    cy.get('.modal-content').should('be.visible');
    cy.contains('Continue Shopping').click();

    // 5. Click 'Cart' button
    cy.contains('Cart').click();

    // 6. Verify that cart page is displayed
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');

    // 7. Click 'X' button corresponding to particular product (удалить первый товар)
    cy.get('.cart_quantity_delete').first().click();

    // 8. Verify that product is removed from the cart
    cy.get('.cart_info').should('not.contain', 'Blue Top'); // или название добавленного товара
    // Либо можно проверить, что корзина пуста, если только один товар был
    // cy.contains('Cart is empty').should('be.visible');
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