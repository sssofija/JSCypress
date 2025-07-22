import '../support/commands/index';

describe('Register User with existing email', () => {
    it('should not allow registration with existing email', () => {

        cy.registerNewUser(); 
        cy.logOut();
        cy.get('@newUser').then((user) => {
            cy.goToSignupPage();
            cy.registrationNewUserLoginPage(user.fullName, user.email, false);
            cy.contains('Email Address already exist!').should('be.visible');
        });
    });
});
