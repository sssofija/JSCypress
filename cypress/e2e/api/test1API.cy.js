describe('API 1: Get All Products List', () => {
  it('should return all products with status 200', () => {
    cy.request('/api/productsList').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products');
      expect(response.body.products).to.be.an('array');
      expect(response.body.products.length).to.be.greaterThan(0);

      const firstProduct = response.body.products[0];
      expect(firstProduct).to.have.property('id');
      expect(firstProduct).to.have.property('name');
      expect(firstProduct).to.have.property('price');
    });
  });
});

/*
API 1: Get All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: GET
Response Code: 200
Response JSON: All products list 
*/