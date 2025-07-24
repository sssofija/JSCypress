describe('API 10: POST To Verify Login with invalid details', () => {
  it('should return 404 and "User not found!" message for invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      failOnStatusCode: false,
      body: {
        email: 'invalid@example.com',
        password: 'wrongpassword',
      },
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('User not found!');
    });
  });
});

/*
API 10: POST To Verify Login with invalid details
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameters: email, password (invalid values)
Response Code: 404
Response Message: User not found!
*/