import { locators as loc } from '../support/locators'

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
