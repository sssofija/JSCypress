import { LoginPageLocators } from '../support/locators/LoginPageLocators';
import { HomePageLocators } from '../support/locators/HomePageLocators';
import '../support/commands'


describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.openHomePage()
        cy.get(HomePageLocators.signupLoginLink).click()
        cy.contains("Login to your account")
        cy.get(LoginPageLocators.emailInput).type("1234@123.com")
        cy.get('[data-qa = "login-password"]').type("1234")
        cy.get('[data-qa = "login-button"]').click()
        cy.contains("Your email or password is incorrect!");
     
    });
})