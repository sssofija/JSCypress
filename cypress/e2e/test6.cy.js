import 'cypress-file-upload';

describe('Contact Us Form', () => {
  it('Contact Us Form', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains("AutomationExercise")
    cy.get('.fa.fa-envelope').click()
    cy.contains("Get In Touch")
    cy.get('[data-qa = "name"]').type("User15")
    cy.get('[data-qa = "email"]').type("User15@mailsac.com")
    cy.get('[data-qa = "subject"]').type("Hello")
    cy.get('[data-qa = "message"]').type("test123")
    cy.get('input[type="file"]').attachFile('test_upload.txt');
    cy.get('[data-qa = "submit-button"]').click()
    cy.on('window:confirm', (text) => {
  expect(text).to.eq('Press OK to proceed!'); 
  return true; 
});
    cy.contains('Success! Your details have been submitted successfully.')
    cy.get('.fa.fa-angle-double-left').click()
    cy.contains("AutomationExercise")

  });
})