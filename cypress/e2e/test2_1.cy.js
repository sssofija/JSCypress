
import '../support/commands';
import { RegistrationPage } from '../pages/LoginPage';
import { UserAccountPage } from '../pages/UserAccountPage';


describe('Переход на страницу входа/регистрации', () => {
  it('Регистрация нового пользователя с валидными данными', () => {
    const registrationPage = new RegistrationPage();
    const user = registrationPage.createUser();
    const userAccountPage = new UserAccountPage()

    cy.registerUser(user);
    userAccountPage.logOut();
    cy.openLoginPageAccount();
    cy.loginAccount();
    userAccountPage.deleteAccount()

  });
});

