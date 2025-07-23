
import '../../support/commands/index';

describe('Login User with correct email and password', () => {
  it('Login User with correct email and password', () => {
      
      cy.validUser();
      cy.get('@newUser').then((user) => {
            cy.goToLoginPage();
            cy.logIn(user.email, user.password);
            cy.contains('Logged in as').should('be.visible');
        });
      cy.deleteAccount();
  });
});

/*Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible*/