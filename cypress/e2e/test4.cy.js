import '../support/commands/index';

describe('Register User with existing email', () => {
    it('should not allow registration with existing email', () => {

        cy.openHomePage();
        cy.goToLoginPage();
        cy.validUser();
        cy.get('@newUser').then((user) => {
            cy.goToLoginPage();
            cy.logIn(user.email, user.password);
            cy.contains(`Logged in as ${user.fullName}`).should('be.visible');
        })
        cy.logOut();
        cy.contains('Login to your account').should('be.visible');
    });
});
