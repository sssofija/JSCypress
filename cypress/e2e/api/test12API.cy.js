describe('API 12: DELETE To Delete User Account', () => {
  before(() => {
    cy.fixture('registeredUser').as('userData');
  });

  it('should delete the user account successfully', function() {
    cy.request({
      method: 'DELETE',
      url: '/api/deleteAccount',
      form: true,
      body: {
        email: this.userData.email,
        password: this.userData.password,
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Account deleted!');
    });
  });
});

/*
API 12: DELETE METHOD To Delete User Account
API URL: https://automationexercise.com/api/deleteAccount
Request Method: DELETE
Request Parameters: email, password
Response Code: 200
Response Message: Account deleted!
*/