describe('API 2: POST To All Products List', () => {
  it('should return 405 method not allowed for POST request', () => {
    cy.request({
      method: 'POST',
      url: '/api/productsList',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(405);
      expect(response.body).to.have.property('message', 'This request method is not supported.');
    });
  });
});

/*
API 2: POST To All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: POST
Response Code: 405
Response Message: This request method is not supported.
*/