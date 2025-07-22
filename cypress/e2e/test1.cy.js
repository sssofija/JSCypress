import '../support/commands/index';

describe('Register User', () => {
  it('Registers a new user with valid data', () => {

    cy.openHomePage();
    cy.goToSignupPage();
    cy.registerNewUser();
    cy.deleteAccount();
  });
});
