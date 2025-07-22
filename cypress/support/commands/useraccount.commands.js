import { locators as loc } from '../locators';


Cypress.Commands.add('registerUser', (user) => {
  cy.openHomePage();
  cy.openLoginPage();

  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  loginPage.enterName(user.fullName);
  loginPage.enterEmail(user.email);
  loginPage.clickSignup();

  registrationPage.fillBasicInfo(user.fullName, user.password, user.details.dateOfBirth);
  registrationPage.fillAddressInfo(user.firstName, user.lastName, user.details);
  registrationPage.submitRegistration();

  // Сохраняем данные пользователя в JSON-файл
  cy.writeFile('cypress/fixtures/registeredUser.json', user);
});

Cypress.Commands.add('openLoginPageAccount', () => {
  cy.get(loc.HomePageLocators.signupLoginLink).click()
  cy.contains('Login to your account')
});

Cypress.Commands.add('loginAccount', () => {
  cy.fixture('registeredUser').then(({ email, password, fullName }) => {
    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();
    cy.contains(`Logged in as ${fullName}`).should('be.visible');
  });
});

export class UserAccountPage {
    logOut() {
        cy.get(loc.UserAccountPageLocators.UserAccountPageLogout).click()
    }

    deleteAccount() {
        cy.get(loc.UserAccountPageLocators.UserAccountPageDelete).click();
        cy.contains('Account Deleted!');
        cy.get(loc.LoginPageLocators.newUserContinueButton).click()
    }
};
