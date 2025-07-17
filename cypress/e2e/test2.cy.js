import { locators as loc } from '../support/locators';
import { generateName, generateEmail, generatePassword, generateUserDetails } from '../support/generateUserData';
import '../support/commands';

describe('Регистрация и вход в систему', () => {
  const { firstName, lastName } = generateName();
  const fullName = `${firstName} ${lastName}`;
  const email = generateEmail(firstName, lastName);
  const password = generatePassword();
  const details = generateUserDetails();

  it('Регистрация нового пользователя', () => {
    cy.openHomePage();
    cy.openLoginPage();

    cy.get(loc.LoginPageLocators.newUserSignUpNameInput).type(fullName);
    cy.get(loc.LoginPageLocators.newUserSignUpEmailInput).type(email);
    cy.get(loc.LoginPageLocators.newUserSignUpButton).click();

    cy.contains('Enter Account Information');
    cy.get(loc.LoginPageLocators.newUserGenderMrsRadioButton).click();
    cy.get(loc.LoginPageLocators.newUserNameInput).clear().type(fullName);
    cy.get(loc.LoginPageLocators.newUserPassword).type(password);
    cy.get(loc.LoginPageLocators.newUserDayOBirthSelect).select('4');
    cy.get(loc.LoginPageLocators.newUserMonthOBirthSelect).select('May');
    cy.get(loc.LoginPageLocators.newUserYearOBirthSelect).select('1990');
    cy.get(loc.LoginPageLocators.newUserNewsletterCheckbox).check();
    cy.get(loc.LoginPageLocators.newUserSpecialOfferCheckbox).check();

    cy.get(loc.LoginPageLocators.newUserFirstNameInput).type(firstName);
    cy.get(loc.LoginPageLocators.newUserLastNameInput).type(lastName);
    cy.get(loc.LoginPageLocators.newUserCompanyInput).type(details.company);
    cy.get(loc.LoginPageLocators.newUserAddressInput).type(details.address);
    cy.get(loc.LoginPageLocators.newUserAddress2Input).type(details.address);
    cy.get(loc.LoginPageLocators.newUserCountrySelect).select("Canada");
    cy.get(loc.LoginPageLocators.newUserStateInput).type(details.state);
    cy.get(loc.LoginPageLocators.newUserCityInput).type(details.city);
    cy.get(loc.LoginPageLocators.newUserZipcodeInput).type(details.zip);
    cy.get(loc.LoginPageLocators.newUserMobileNumberInput).type(details.mobile);

    cy.get(loc.LoginPageLocators.newUserCreateAccountButton).click();
    cy.contains("Account Created!");
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
    cy.contains("Logged in as");

    // Выход из аккаунта
    cy.get(loc.HomePageLocators.logoutLink).click();
  });

  it('Вход с зарегистрированными данными', () => {
    cy.openHomePage();
    cy.openLoginPage();

    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();

    cy.contains("Logged in as");

    // Удаление аккаунта
    cy.get(loc.UserAccountPageLocators.UserAccountPageDelete).click();
    cy.contains("Account Deleted!");
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
  });
});
