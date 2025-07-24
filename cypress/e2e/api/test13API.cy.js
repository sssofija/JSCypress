const titles = ['Mr', 'Mrs', 'Miss'];

describe('API 13: PUT To Update User Account', () => {
  before(() => {
    cy.fixture('registeredUser').as('userData');
  });

  it('should update the user account successfully', function() {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    cy.request({
      method: 'PUT',
      url: '/api/updateAccount',
      form: true,
      body: {
        name: this.userData.fullName,
        email: this.userData.email,
        password: this.userData.password,
        title: randomTitle,
        birth_date: this.userData.day,
        birth_month: this.userData.month,
        birth_year: this.userData.year,
        firstname: this.userData.firstName,
        lastname: this.userData.lastName,
        company: this.userData.details.company,
        address1: this.userData.details.address,
        address2: this.userData.details.address,
        country: this.userData.details.country,
        zipcode: this.userData.details.zip,
        state: this.userData.details.state,
        city: this.userData.details.city,
        mobile_number: this.userData.details.mobile
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('User updated!');
    });
  });
});

/*
API 13: PUT METHOD To Update User Account
API URL: https://automationexercise.com/api/updateAccount
Request Method: PUT
Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
Response Code: 200
Response Message: User updated!
*/