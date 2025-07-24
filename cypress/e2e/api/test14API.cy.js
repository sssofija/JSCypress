describe('API 14: GET User Account Detail by Email', () => {
  before(() => {
    cy.fixture('registeredUser').as('userData');
  });

  it('should get user details by email', function() {
    cy.request({
      method: 'GET',
      url: '/api/getUserDetailByEmail',
      qs: { email: this.userData.email }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('email', this.userData.email);
      expect(res.body).to.have.property('firstname', this.userData.firstName);
      expect(res.body).to.have.property('lastname', this.userData.lastName);
    });
  });
});

/*
API 14: GET user account detail by email
API URL: https://automationexercise.com/api/getUserDetailByEmail
Request Method: GET
Request Parameters: email
Response Code: 200
Response JSON: User Detail
*/