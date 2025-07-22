import { locators as loc } from '../support/locators';
import {
  generateEmail,
  generatePassword,
} from '../support/utilities/auth';

import '../support/commands/index';
import {
  invalidEmailPatterns,
  invalidPasswordPatterns
} from '../support/utilities/patterns';

describe('Test Case 3: Login User with incorrect email and password variations', () => {
  const firstName = 'Fake';
  const lastName = 'User';

  beforeEach(() => {
    cy.visit('/');
  });

  // 🔁 Тест: невалидные email + валидный пароль
  invalidEmailPatterns.forEach((patternFn, index) => {
    it(`Should show native validation message for invalid email #${index + 1}`, () => {
      const email = patternFn(firstName, lastName, 'rndPart');
      const password = generatePassword({ valid: true });

      runLoginTest(email, password, `Invalid email #${index + 1}, valid password`);
    });
  });

  // 🔁 Тест: валидный email + невалидные пароли
  invalidPasswordPatterns.forEach((patternFn, index) => {
    it(`Should show error for valid email and invalid password #${index + 1}`, () => {
      const email = generateEmail(firstName, lastName, { valid: true });
      const password = patternFn();

      runLoginTest(email, password, `Valid email, invalid password #${index + 1}`);
    });
  });

  // 🔁 Тест: невалидный email + невалидный пароль
  invalidEmailPatterns.forEach((emailPatternFn, i) => {
    invalidPasswordPatterns.forEach((passPatternFn, j) => {
      it(`Should show validation or error for invalid email #${i + 1} and invalid password #${j + 1}`, () => {
        const email = emailPatternFn(firstName, lastName, 'rndPart');
        const password = passPatternFn();

        runLoginTest(email, password, `Invalid email #${i + 1}, invalid password #${j + 1}`);
      });
    });
  });

  // ✅ Общая функция логина и проверки результата
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

        // Сабмит не должен привести к переходу, остаёмся на странице логина
        cy.get(loc.LoginPageLocators.loginButton).click();
        cy.url().should('include', '/login');
      } else {
        // Email валиден, проверим ошибку сервера
        cy.get(loc.LoginPageLocators.loginButton).click();
        cy.contains("Your email or password is incorrect!").should('be.visible');
        cy.task('writeTestCases', `Result: error message "Your email or password is incorrect!" shown`);
      }
    });
  }
});
