import '../../support/commands/index';

describe('Register User with existing email', () => {
    it('should not allow registration with existing email', () => {
        
        cy.registerNewUser();
        cy.logOut();
        cy.get('@newUser').then((user) => {
            cy.goToSignupPage();
            cy.registrationNewUserLoginPage(user.fullName, user.email, false);
        cy.contains('Email Address already exist!', { timeout: 10000 })
  .scrollIntoView()
  .should('be.visible');

        });
    });
});

/*Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible*/