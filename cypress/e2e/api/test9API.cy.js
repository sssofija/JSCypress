describe('API 9: DELETE To Verify Login', () => {
  it('should return 405 Method Not Allowed for DELETE request', () => {
    cy.request({
      method: 'DELETE',
      url: '/api/verifyLogin',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(405);
      expect(response.body.message).to.eq('This request method is not supported.');
    });
  });
});

/*
API 9: DELETE To Verify Login
API URL: https://automationexercise.com/api/verifyLogin
Request Method: DELETE
Response Code: 405
Response Message: This request method is not supported.
*/