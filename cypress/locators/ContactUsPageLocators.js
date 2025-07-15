export const ContactUsPageLocators = {
  // Заголовок страницы
  contactUsTitle: '.contact-form h2.title.text-center',

  // Поля формы
  nameInput: '[data-qa="name"]',
  emailInput: '[data-qa="email"]',
  subjectInput: '[data-qa="subject"]',
  messageTextarea: '[data-qa="message"]',

  // Кнопка загрузки файла
  uploadFileInput: 'input[name="upload_file"]',

  // Кнопка "Submit"
  submitButton: '[data-qa="submit-button"]',

  // Alert с успешным сообщением
  successAlert: '.status.alert.alert-success',

  // Кнопка "Home"
  homeButton: '.btn.btn-success',

  // Ошибка, если поля не заполнены (если применимо)
  formError: '.contact-form .text-danger', // если появится
};
