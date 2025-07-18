import '../support/commands';
import { RegistrationPage } from '../pages/LoginPage';


describe('Переход на страницу входа/регистрации', () => {
  it('Регистрация нового пользователя с валидными данными', () => {
    const registrationPage = new RegistrationPage();
    const user = registrationPage.createUser();

    cy.registerUser(user);
    registrationPage.deleteAccount();
  });
});
