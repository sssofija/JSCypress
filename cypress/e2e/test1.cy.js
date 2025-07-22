import '../support/commands/index';
import { createUser } from '../support/utilities/auth';

describe('Navigation to login/registration page', () => {
  it('Registers a new user with valid data', () => {

    cy.openHomePage();
    cy.goToSignupPage();
    cy.registerNewUser();
    cy.deleteAccount();
  });
});
