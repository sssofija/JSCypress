const fs = require('fs');
const path = require('path');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      on('task', {
        writeTestCases(data) {
          const filePath = path.join(__dirname, 'cypress', 'test-output', 'testCasesLog.txt');
          fs.mkdirSync(path.dirname(filePath), { recursive: true });
          fs.appendFileSync(filePath, data + '\n');
          return null;
        }
      });
      return config;
    }
  }
});
