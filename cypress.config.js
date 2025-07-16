const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com', // исправил ошибку в адресе
    setupNodeEvents(on, config) {
      // сюда можно добавить обработчики событий, если нужно
    }
  }
});
