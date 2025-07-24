import '../../support/commands/common.commands';
import {locators as loc} from '../../support/locators';

describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
  it('should scroll down and scroll up using the arrow button', () => {
    const text = 'Full-Fledged practice website for Automation Engineers'

    cy.openHomePage();
    cy.bottonSubscription();
    cy.get(loc.HomePageLocators.scrollUp).should('be.visible').click();
    cy.contains(text).should('be.visible');
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