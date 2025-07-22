import '../support/commands/index';

describe('Register User with existing email', () => {
    it('should not allow registration with existing email', () => {

        cy.registerNewUser(); 
        cy.logOut();
        cy.contains('Login to your account').should('be.visible');
    });
});
