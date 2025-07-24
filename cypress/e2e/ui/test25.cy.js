import '../../support/commands/common.commands';

describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
  it('should scroll down and scroll up using the arrow button', () => {
    
    cy.opeHomePage();
    cy.bottonSubscription();
    // 6. Click on arrow at bottom right side to move upward
    cy.get('#scrollUp').should('be.visible').click();
    // 7. Verify that page is scrolled up and specific text is visible
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  });
});

/*Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Click on arrow at bottom right side to move upward
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen*/