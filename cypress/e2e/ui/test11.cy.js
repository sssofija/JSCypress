import '../../support/commands/index'

describe('Verify Subscription in Cart page', () =>{
    it('Verify Subscription in Cart page', () =>{
        cy.openHomePage();
        cy.goToProductsPage();
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('testemail@example.com'); 
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
})
/*Test Case 11: Verify Subscription in Cart page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible*/