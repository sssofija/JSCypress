describe('API 3: Get All Brands List', () => {
  it('should return all brands list with status 200', () => {
    cy.request('GET', '/api/brandsList').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('brands').and.to.be.an('array').and.not.to.be.empty;
    });
  });
});

/*
API 3: Get All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: GET
Response Code: 200
Response JSON: All brands list
*/