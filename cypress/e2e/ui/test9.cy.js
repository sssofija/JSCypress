import '../../support/commands/index'

describe('Search Product', () => {
    it('Search Random Product', () => {
        cy.openHomePage();
        cy.goToProductsPage();
        cy.fixture('productlist').then((products) => {
           const randomProduct = Cypress._.sample(products);
           cy.searchProduct(randomProduct);
           cy.contains(randomProduct).should('be.visible');
        });
    });
});






/*Test Case 9: Search Product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible*/