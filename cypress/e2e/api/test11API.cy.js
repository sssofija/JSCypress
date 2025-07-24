import { createUser } from '../../support/utilities/registration';

describe('API 11: POST To Create/Register User Account', () => {
  it('should create a new user account successfully', () => {
    const user = createUser();
    const titles = ['Mr', 'Mrs', 'Miss'];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    cy.request({
      method: 'POST',
      url: '/api/createAccount',
      form: true,
      body: {
        name: user.fullName,
        email: user.email,
        password: user.password,
        title: randomTitle,
        birth_date: user.day,
        birth_month: user.month,
        birth_year: user.year,
        firstname: user.firstName,
        lastname: user.lastName,
        company: user.details.company,
        address1: user.details.address,
        address2: user.details.address,
        country: user.details.country,
        zipcode: user.details.zip,
        state: user.details.state,
        city: user.details.city,
        mobile_number: user.details.mobile,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('User created!');
    });
  });
});




/*
API 11: POST To Create/Register User Account
API URL: https://automationexercise.com/api/createAccount
Request Method: POST
Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
Response Code: 201
Response Message: User created!
*/