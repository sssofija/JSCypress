describe('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
  it('should scroll down and up successfully', () => {
    // 1. Launch browser & 2. Navigate to url
    cy.visit('http://automationexercise.com');

    // 3. Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise');
    cy.get('body').should('be.visible');

    // 4. Scroll down page to bottom
    cy.scrollTo('bottom');

    // 5. Verify 'SUBSCRIPTION' is visible
    cy.contains('SUBSCRIPTION').should('be.visible');

    // 6. Scroll up page to top (without arrow button)
    cy.scrollTo('top');

    // 7. Verify that page is scrolled up and specific text is visible
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  });
});

/*Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Scroll up page to top
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen*/