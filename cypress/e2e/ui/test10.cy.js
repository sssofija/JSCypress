import'../../support/commands/index';

describe('Verify Subscription in home page', () =>{
    it('Verify Subscription in home page', () =>{
        cy.openHomePage();
        cy.get('body').should('be.visible');
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('testemail@example.com'); 
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })
})


/*Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible*/