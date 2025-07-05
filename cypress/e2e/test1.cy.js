
describe('Тест Главная страница', () => {
  it('Открывает главную страницу Automatio Exercise и проверяет заголовок', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('AutomationExercise') 
  })
})

describe('Переход на страницу входа/регистрации', () => {
  it('Нажимаем на кнопку Signup/Login', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('AutomationExercise')
    cy.get('.fa.fa-lock').click()
    cy.contains('New User Signup!')
    cy.get('[data-qa="signup-name"]').type('userTest')
    cy.get('[data-qa = "signup-email"]').type('userTest@mailsac.com')
    cy.get('[data-qa = "signup-button"]').click()
    cy.contains('Enter Account Information')
    cy.get('#id_gender2').click()
    cy.get('#name').clear()
    cy.get('#name').type('UserTest')
  })
}
)


