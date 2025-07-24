describe('API 4: PUT To All Brands List', () => {
  it('should return 405 for PUT method', () => {
    cy.request({
      method: 'PUT',
      url: '/api/brandsList',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

/*
API 4: PUT To All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: PUT
Response Code: 405
Response Message: This request method is not supported.
*/