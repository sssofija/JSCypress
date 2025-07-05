# Cypress UI Tests for AutomationExercise.com

This project contains automated end-to-end UI tests for [AutomationExercise.com](https://automationexercise.com), built using [Cypress](https://www.cypress.io/).

## 📋 Project Overview

The tests cover key user flows and interface checks, including:

- Opening the home page  
- Navigating to the Signup/Login page  
- Filling out user registration forms  
- Verifying elements and content on the page  

## 🧪 Technologies Used

- **Cypress** – JavaScript-based end-to-end testing framework  
- **Node.js** and **npm** – for dependency management  

## 🚀 Getting Started

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
