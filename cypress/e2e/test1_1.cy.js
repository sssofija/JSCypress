import { HomePage } from '../pages/HomePage';
import { LoginPage, RegistrationPage } from '../pages/LoginPage';
import {
  generateName,
  generateEmail,
  generatePassword,
  generateUserDetails
} from '../support/generateUserData';
import '../support/commands';

describe('Переход на страницу входа/регистрации', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  it('Регистрация нового пользователя с валидными данными', () => {
    const { firstName, lastName } = generateName();
    const fullName = `${firstName} ${lastName}`;
    const email = generateEmail(firstName, lastName);
    const password = generatePassword();
    const details = generateUserDetails();

    cy.openHomePage();
    cy.openLoginPage();

    loginPage.enterName(fullName); // ✅ передаём аргумент
    loginPage.enterEmail(email);   // ✅ передаём аргумент
    loginPage.clickSignup();       // ✅ обязательно клик по кнопке регистрации

    registrationPage.fillBasicInfo(fullName, password, details.dateOfBirth); // ✅ вызов у экземпляра
    registrationPage.fillAddressInfo(firstName, lastName, details);         // ✅ вызов у экземпляра
    registrationPage.submitRegistration();                                   // ✅ вызов у экземпляра
    registrationPage.deleteAccount();                                        // ✅ вызов у экземпляра
  });
});

