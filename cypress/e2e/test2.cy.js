
import '../support/commands/index';
import { createUser } from '../support/utilities/auth';

describe('Переход на страницу входа/регистрации', () => {
  it('Регистрация нового пользователя с валидными данными', () => {
          
       cy.registerNewUser();
       cy.logOut();
       cy.checkNewUserAccountLoginPage();
       cy.deleteAccount();
  });
});

