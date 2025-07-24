describe('API 5: POST To Search Product', () => {
  beforeEach(() => {
    cy.fixture('productlist').as('products');
  });

  it('should return searched products list for a valid search term', function () {
    const searchTerm = this.products[0];

    cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      form: true,
      body: { search_product: searchTerm },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products');
      expect(response.body.products).to.be.an('array').that.is.not.empty;
      const found = response.body.products.some(p => p.product_name.toLowerCase().includes(searchTerm.toLowerCase()));
      expect(found).to.be.true;
    });
  });
});

/*
API 5: POST To Search Product
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Request Parameter: search_product (For example: top, tshirt, jean)
Response Code: 200
Response JSON: Searched products list
*/