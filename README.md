# Cypress UI + API Tests for AutomationExercise.com

This project includes automated end-to-end UI tests for [AutomationExercise.com](https://automationexercise.com), developed using [Cypress](https://www.cypress.io/). Cypress is particularly interesting because, according to the official recommendations from its developers, it does not encourage the use of the Page Object Model (POM) — a design pattern commonly used in UI test automation to organize web page elements and actions into separate classes or objects. Instead, Cypress promotes implementing reusable test logic and actions through custom commands, enabling cleaner, more maintainable, and straightforward test code.

In addition to UI tests, the project also contains API tests, leveraging Cypress’s capabilities to validate backend endpoints and ensure the overall reliability of the application.


📋 Project Overview  
The tests cover key user flows and interface checks, including:

- Opening the home page  
- Navigating to the Signup/Login page  
- Filling out user registration forms  
- Verifying elements and content on the page  

Additionally, the project includes API tests to validate backend endpoints, ensuring that the application’s server responses and data handling are functioning correctly.

## Technologies Used

- **Cypress** – JavaScript-based end-to-end testing framework  
- **Node.js** and **npm** – for dependency management  

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run Cypress tests

To launch the Cypress Test Runner UI:

```bash
npx cypress open
```

To run all tests in headless mode:

```bash
npx cypress run
```

## 📂 Project Structure

```
cypress/
  ├── e2e/               # Test specifications
  ├── fixtures/          # Static test data
  ├── support/           # Custom commands and setup
cypress.config.js        # Cypress configuration file
package.json             # Project dependencies and scripts
```
