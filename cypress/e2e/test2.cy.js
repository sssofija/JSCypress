
import '../support/commands/index';

describe('Login User with correct email and password', () => {
  it('Login User with correct email and password', () => {
      
      cy.validUser();
      cy.get('@newUser').then((user) => {
            cy.goToLoginPage();
            cy.logIn(user.email, user.password);
            cy.contains('Logged in as').should('be.visible');
        });
      cy.deleteAccount();
  });
});