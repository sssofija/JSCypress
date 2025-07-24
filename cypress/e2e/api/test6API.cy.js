describe('API 6: POST To Search Product without search_product parameter', () => {
  it('should return 400 Bad Request when search_product is missing', () => {
    cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      failOnStatusCode: false, 
      body: {}, 
      form: true
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message').and.to.match(/search_product parameter is missing/i);
    });
  });
});

/*
API 6: POST To Search Product without search_product parameter
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Response Code: 400
Response Message: Bad request, search_product parameter is missing in POST request.
*/