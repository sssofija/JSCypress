
/// <reference types="cypress" />


describe('Мой первый тест', () => {
  it('Открывает сайт', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
  

describe('Тест Wikipedia', () => {
  it('Открывает главную страницу Wikipedia и проверяет заголовок', () => {
    cy.visit('https://www.wikipedia.org')
    cy.contains('Wikipedia') // Проверяем наличие текста "Wikipedia"
  })
})
