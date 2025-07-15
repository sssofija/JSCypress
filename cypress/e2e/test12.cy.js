describe('Тестирование модальных окон на The Internet', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  })

  it('Обработка alert', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert')
    })
    cy.contains('Click for JS Alert').click()
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })

  it('Обработка confirm — OK', () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('I am a JS Confirm')
      return true // нажимаем OK
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('have.text', 'You clicked: Ok')
  })

  it('Обработка confirm — Cancel', () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('I am a JS Confirm')
      return false // нажимаем Cancel
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('have.text', 'You clicked: Cancel')
  })

  it('Обработка prompt — ввод текста', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('Cypress Test')
    })
    cy.contains('Click for JS Prompt').click()
    cy.get('#result').should('have.text', 'You entered: Cypress Test')
  })

  it('Обработка prompt — нажатие Cancel', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(null)
    })
    cy.contains('Click for JS Prompt').click()
    cy.get('#result').should('have.text', 'You entered: null')
  })
})
