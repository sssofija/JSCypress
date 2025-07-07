
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
    cy.get('[data-qa= "password"]').type('1234567Q')
    cy.get('[data-qa = "days"]').select('4')
    cy.get('[data-qa = "months"]').select('May')
    cy.get('[data-qa = "years"]').select('1990')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa= "first_name"]').type("User")
    cy.get('[data-qa = "last_name"]').type("User1")
    cy.get('[data-qa = "company"]').type("NoName")
    cy.get('#address1').type("742 Evergreen Terrace, Springfield, 90210, United States (P.O. Box 348, Globex Corporation)")
    cy.get('#address2').type("742 Evergreen Terrace, Springfield, 90210, United States (P.O. Box 348, Globex Corporation)")
    cy.get('[data-qa = "country"]').select("Canada")
    cy.get('[data-qa = "state"]').type("Ontario")
    cy.get('[data-qa = "city"]').type("Toronto")
    cy.get('[data-qa = "zipcode"]').type("M4B 1B3")
    cy.get('[data-qa = "mobile_number"]').type("647-839-2745")
    cy.get('[data-qa = "create-account"]').click()
  })
}
)


