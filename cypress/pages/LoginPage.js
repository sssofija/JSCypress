import { locators as loc } from '../support/locators';

export class LoginPage {
  openLoginPage() {
    cy.openLoginPage(); 
  }

  enterName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }

  enterEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  verifyAccountInfoVisible() {
    cy.contains('Enter Account Information');
  }
}

export class RegistrationPage {
  
  fillBasicInfo(fullName, password, dob) {
    cy.contains('Enter Account Information');
    cy.get(loc.LoginPageLocators.newUserGenderMrsRadioButton).click();
    cy.get(loc.LoginPageLocators.newUserNameInput).clear().type(fullName);
    cy.get(loc.LoginPageLocators.newUserPassword).type(password);
    cy.get(loc.LoginPageLocators.newUserDayOBirthSelect).select(dob.day);
    cy.get(loc.LoginPageLocators.newUserMonthOBirthSelect).select(dob.month);
    cy.get(loc.LoginPageLocators.newUserYearOBirthSelect).select(dob.year);
    cy.get(loc.LoginPageLocators.newUserNewsletterCheckbox).check();
    cy.get(loc.LoginPageLocators.newUserSpecialOfferCheckbox).check();
  }

  fillAddressInfo(firstName, lastName, details) {
    cy.get(loc.LoginPageLocators.newUserFirstNameInput).type(firstName);
    cy.get(loc.LoginPageLocators.newUserLastNameInput).type(lastName);
    cy.get(loc.LoginPageLocators.newUserCompanyInput).type(details.company);
    cy.get(loc.LoginPageLocators.newUserAddressInput).type(details.address);
    cy.get(loc.LoginPageLocators.newUserAddress2Input).type(details.address);
    cy.get(loc.LoginPageLocators.newUserCountrySelect).select(details.country);
    cy.get(loc.LoginPageLocators.newUserStateInput).type(details.state);
    cy.get(loc.LoginPageLocators.newUserCityInput).type(details.city);
    cy.get(loc.LoginPageLocators.newUserZipcodeInput).type(details.zip);
    cy.get(loc.LoginPageLocators.newUserMobileNumberInput).type(details.mobile);
  }

  submitRegistration() {
    cy.get(loc.LoginPageLocators.newUserCreateAccountButton).click();
    cy.contains('Account Created!');
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
    cy.contains('Logged in as');
  }

  deleteAccount() {
    cy.get(loc.UserAccountPageLocators.UserAccountPageDelete).click();
    cy.contains('Account Deleted!');
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
  }
}
