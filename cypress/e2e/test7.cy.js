describe('Verify Test Cases Page', () => {
it('Verify Test Cases Page', () => {
    cy.visit('http://automationexercise.com')
    cy.contains("AutomationExercise");
    cy.contains('Test Cases').click()
    cy.contains("Test Cases")

    
});})