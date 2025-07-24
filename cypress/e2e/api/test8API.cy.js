describe('API: Verify Login without email parameter', () => {
  let password;

  before(() => {
    cy.fixture('registeredUser').then((user) => {
      password = user.password;
    });
  });

  it('should return 400 when email is missing', () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      body: {
        password: password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Bad request, email or password parameter is missing in POST request.');
    });
  });
});

/*
API 8: POST To Verify Login without email parameter
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameter: password
Response Code: 400
Response Message: Bad request, email or password parameter is missing in POST request.
*/