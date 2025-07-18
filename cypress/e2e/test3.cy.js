import { locators as loc } from '../support/locators';
import {
  generateInvalidEmail,
  generateInvalidPassword,
} from '../support/generateUserData'; // Импорт невалидных функций

import '../support/commands';

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('Should show error on incorrect credentials', () => {
    const email = generateInvalidEmail('Fake', 'User');   // Используем невалидный email
    const password = generateInvalidPassword();           // Используем невалидный пароль

    cy.openHomePage();
    cy.get(loc.HomePageLocators.signupLoginLink).click();

    cy.contains("Login to your account");

    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();

    cy.contains("Your email or password is incorrect!");  // Проверяем сообщение об ошибке
  });
});
