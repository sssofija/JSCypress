import { locators as loc } from '../support/locators';
import {
  generateEmail,
  generatePassword,
} from '../support/generateUserData';

import '../support/commands';


describe('Test Case 3: Login User with incorrect email and password', () => {
  it('Should show error on incorrect credentials', () => {
    const email = generateEmail('Fake', 'User');
    const password = generatePassword();

    cy.openHomePage();
    cy.get(loc.HomePageLocators.signupLoginLink).click();

    cy.contains("Login to your account");

    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();

    cy.contains("Your email or password is incorrect!");
  });
});