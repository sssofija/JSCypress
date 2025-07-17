export class HomePage {
  openHomePage() {
    cy.openHomePage(); 
  }

  openTestCasesPage() {
    cy.openTestCasesPage(); 
  }

  goToLoginPage() {
    cy.get(loc.HomePageLocators.signupLoginLink).click();
    cy.contains('New User Signup!');
  }
}
