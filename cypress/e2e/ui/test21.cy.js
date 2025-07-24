import { createUser } from '../../support/utilities/utilities';
import { faker } from '@faker-js/faker';

describe('Product Review', () => {
  it('should allow user to add a review on a product', () => {
    const user = createUser();
    const reviewText = faker.lorem.sentences(2);

    cy.openHomePage();
    cy.goToProductsPage();
    cy.get('.product-overlay').first().trigger('mouseover', {force: true});
    cy.contains('View Product').first().click();
    cy.contains('Write Your Review').should('be.visible');
    cy.get('#name').type(user.fullName);
    cy.get('#email').type(user.email);
    cy.get('#review').type(reviewText);
    cy.get('#button-review').click();
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