describe('API: Verify Login with fixture data', () => {
  before(() => {
    cy.fixture('registeredUser').as('user');
  });

  it('should return 200 and "User exists!" message for valid credentials', function () {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      body: {
        email: this.user.email,
        password: this.user.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'User exists!');
    });
  });
});

/*
API 7: POST To Verify Login with valid details
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameters: email, password
Response Code: 200
Response Message: User exists!
*/