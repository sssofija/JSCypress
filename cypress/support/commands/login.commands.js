import { locators as loc } from '../locators';

//Registration

import { createUser } from '../utilities/auth';

Cypress.Commands.add('registerNewUser', () => {
    const user = createUser();
    cy.openHomePage();
    cy.goToSignupPage();
    cy.registrationNewUserLoginPage(user.fullName, user.email);
    cy.fillBasicInfo(user.fullName, user.password, user.day, user.month, user.year);
    cy.fillAddressInfo(user.firstName, user.lastName, user.details);
    cy.submitRegistration(user);
    cy.wrap(user).as('newUser');
});


Cypress.Commands.add('registrationNewUserLoginPage', (name, email, expectSuccess = true) => {
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    if (expectSuccess) {
        cy.contains('Enter Account Information', { timeout: 10000 }).should('be.visible');
    }
});

Cypress.Commands.add('fillBasicInfo', (name, password, day, month, year) => {
  cy.contains('Enter Account Information').should('be.visible');
  const genderLocators = [
    loc.LoginPageLocators.newUserGenderMrRadioButton,
    loc.LoginPageLocators.newUserGenderMrsRadioButton,
  ];
  const randomGenderLocator = genderLocators[Math.floor(Math.random() * genderLocators.length)];
  cy.get(randomGenderLocator).click();
  cy.get(loc.LoginPageLocators.newUserNameInput).clear().type(name);
  cy.get(loc.LoginPageLocators.newUserPassword).type(password);
  cy.get(loc.LoginPageLocators.newUserDayOBirthSelect).select(day);
  cy.get(loc.LoginPageLocators.newUserMonthOBirthSelect).select(month);
  cy.get(loc.LoginPageLocators.newUserYearOBirthSelect).select(year);
  cy.get(loc.LoginPageLocators.newUserNewsletterCheckbox).check();
  cy.get(loc.LoginPageLocators.newUserSpecialOfferCheckbox).check();
});

Cypress.Commands.add ('fillAddressInfo', (firstName, lastName, details) => {
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
});

Cypress.Commands.add ('submitRegistration',(user) => {
    cy.get(loc.LoginPageLocators.newUserCreateAccountButton).click();
    cy.contains('Account Created!');
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
    cy.contains('Logged in as');
    cy.writeFile('cypress/fixtures/registeredUser.json', user);
});

Cypress.Commands.add ('deleteAccount', () => {
    cy.get(loc.UserAccountPageLocators.userAccountPageDelete).click();
    cy.contains('Account Deleted!');
    cy.get(loc.LoginPageLocators.newUserContinueButton).click();
});

//Login in account

Cypress.Commands.add('checkNewUserAccountLoginPage', () => {
  cy.fixture('registeredUser').then(({ email, password, fullName }) => {
    cy.get(loc.LoginPageLocators.emailInput).type(email);
    cy.get(loc.LoginPageLocators.passwordInput).type(password);
    cy.get(loc.LoginPageLocators.loginButton).click();
    cy.contains(`Logged in as ${fullName}`).should('be.visible');
  });
});

Cypress.Commands.add('logOut', () =>{
  cy.get(loc.UserAccountPageLocators.userAccountPageLogout).click();
});
