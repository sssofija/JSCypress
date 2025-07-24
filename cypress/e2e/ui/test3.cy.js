import { locators as loc } from '../../support/locators';
import {
  generateEmail,
  generatePassword,
} from '../../support/utilities/auth';

import '../../support/commands/index';
import {
  invalidEmailPatterns,
  invalidPasswordPatterns
} from '../../support/utilities/patterns';

describe('Test Case 3: Login User with incorrect email and password variations', () => {
  const firstName = 'Fake';
  const lastName = 'User';

  beforeEach(() => {
    cy.visit('/');
  });

  invalidEmailPatterns.forEach((patternFn, index) => {
    it(`Should show native validation message for invalid email #${index + 1}`, () => {
      const email = patternFn(firstName, lastName, 'rndPart');
      const password = generatePassword({ valid: true });

      runLoginTest(email, password, `Invalid email #${index + 1}, valid password`);
    });
  });

  invalidPasswordPatterns.forEach((patternFn, index) => {
    it(`Should show error for valid email and invalid password #${index + 1}`, () => {
      const email = generateEmail(firstName, lastName, { valid: true });
      const password = patternFn();

      runLoginTest(email, password, `Valid email, invalid password #${index + 1}`);
    });
  });

  invalidEmailPatterns.forEach((emailPatternFn, i) => {
    invalidPasswordPatterns.forEach((passPatternFn, j) => {
      it(`Should show validation or error for invalid email #${i + 1} and invalid password #${j + 1}`, () => {
        const email = emailPatternFn(firstName, lastName, 'rndPart');
        const password = passPatternFn();

        runLoginTest(email, password, `Invalid email #${i + 1}, invalid password #${j + 1}`);
      });
    });
  });

  function runLoginTest(email, password, description) {
    cy.task('writeTestCases', `Test start: ${description} | email: ${email}, password: ${password}`);

    cy.get(loc.HomePageLocators.signupLoginLink).click();
    cy.contains("Login to your account");

    cy.get(loc.LoginPageLocators.emailInput).clear().type(email);
    cy.get(loc.LoginPageLocators.passwordInput).clear().type(password);

    cy.get(loc.LoginPageLocators.emailInput).then(($emailInput) => {
      const isEmailValid = $emailInput[0].checkValidity();

      if (!isEmailValid) {
        const validationMessage = $emailInput[0].validationMessage;
        cy.log(`Validation failed: ${validationMessage}`);
        cy.task('writeTestCases', `Result: native validation message shown: "${validationMessage}"`);

        cy.get(loc.LoginPageLocators.loginButton).click();
        cy.url().should('include', '/login');
      } else {
        cy.get(loc.LoginPageLocators.loginButton).click();
        cy.contains("Your email or password is incorrect!").should('be.visible');
        cy.task('writeTestCases', `Result: error message "Your email or password is incorrect!" shown`);
      }
    });
  }
});

/*Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible*/