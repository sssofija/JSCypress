import '../../support/commands/common.commands';
import {locators as loc} from '../../support/locators';

describe('Verify All Products and product detail page', () => {
it('Verify All Products and product detail page', () => {
    cy.openHomePage();
    cy.goToProductsPage();
    cy.get(loc.ProductsPageLocators.listOfProductDetails).first().click();
    cy.verifyProductDetailsPage();
  });
});

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