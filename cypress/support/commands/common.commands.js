import './home.commands';
import './login.commands';
import './useraccount.commands';
import './product.commands';
import './contactUs.commands';
import { generateName } from '../utilities/registration';
import { generateEmail } from '../utilities/auth';


Cypress.Commands.add('subscribeWithGeneratedUser', (options = { valid: true }) => {
  const { firstName, lastName } = generateName();
  const email = generateEmail(firstName, lastName, options);

  cy.scrollTo('bottom');
  cy.contains('Subscription').should('be.visible');
  cy.get('#susbscribe_email').clear().type(email);
  cy.get('#subscribe').click();

  if (options.valid) {
    cy.contains('You have been successfully subscribed!').should('be.visible');
  } else {
       cy.get('#susbscribe_email').then(($input) => {
          const message = $input[0].validationMessage;
          expect(message).to.not.be.empty;
  });
}
});
