import '../support/commands/index';
import { createUser } from '../support/utilities/auth';

describe('Navigation to login/registration page', () => {
  it('Registers a new user with valid data', () => {
    const user = createUser();

    cy.openHomePage();
    cy.goToSignupPage();
    cy.registrationNewUserLoginPage(user.fullName, user.email);
    cy.fillBasicInfo(user.fullName, user.password, user.day, user.month, user.year);
    cy.fillAddressInfo(user.firstName, user.lastName, user.details);
    cy.submitRegistration(user);
    cy.deleteAccount();
  });
});
