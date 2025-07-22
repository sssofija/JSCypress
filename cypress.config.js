const fs = require('fs');
const path = require('path');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com', // исправил ошибку в адресе
    setupNodeEvents(on, config) {
      // Регистрируем задачу writeTestCases
      on('task', {
        writeTestCases(data) {
          const filePath = path.join(__dirname, 'cypress', 'test-output', 'testCasesLog.txt');
          fs.mkdirSync(path.dirname(filePath), { recursive: true }); // создаем папку, если нет
          fs.appendFileSync(filePath, data + '\n');
          return null;
        }
      });
      return config;
    }
  }
});
