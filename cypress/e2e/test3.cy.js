describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.visit('http://automationexercise.com')
        cy.contains('AutomationExercise')
        cy.get('.fa.fa-lock').click()
        cy.contains("Login to your account")
        cy.get('[data-qa = "login-email"]').type("1234@123.com")
        cy.get('[data-qa = "login-password"]').type("1234")
        cy.get('[data-qa = "login-button"]').click()
        cy.contains("Your email or password is incorrect!");
     
    });
})