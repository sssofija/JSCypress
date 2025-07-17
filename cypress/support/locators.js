export const ContactUsPageLocators = {
  // Заголовок страницы
  contactUsTitle: '.contact-form h2.title.text-center',

  // Поля формы
  nameInput: 'input[data-qa="name"]',
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

export const HomePageLocators = {
  // Навбар / верхнее меню
  navBar: '.navbar-nav',
  homeLink: 'a[href="/"]',
  productsLink: 'a[href="/products"]',
  cartLink: 'a[href="/view_cart"]',
  signupLoginLink: 'a[href="/login"]',
  testCasesLink: 'a[href="/test_cases"]',
  logoutLink: 'a[href="/logout"]',
  contactUsLink: 'a[href="/contact_us"]',

  // Логотип
  siteLogo: '.navbar-brand',

  // Слайдер на главной
  mainSlider: '#slider-carousel',
  sliderItem: '.carousel-inner .item',

  // Заголовок "Features Items"
  featuresTitle: '.features_items > h2',

  // Блок популярных товаров
  productBlock: '.features_items .product-image-wrapper',
  productName: '.features_items .productinfo p',
  addToCartButton: '.features_items .add-to-cart',

  // Боковое меню категорий
  leftSidebar: '.left-sidebar',
  categorySection: '.panel-group.category-products',
  categoryItem: '.panel-group.category-products .panel-title a',

  // Бренды (слева)
  brandsSection: '.brands_products',
  brandItem: '.brands-name a',

  // Подвал
  footer: 'footer',
  footerText: 'footer .footer-bottom',
};

export const LoginPageLocators = {
  emailInput: 'input[data-qa="login-email"]',
  passwordInput: 'input[data-qa="login-password"]',
  loginButton: 'button[data-qa="login-button"]',
  loginError: '.login-form p',
  loginSuccessText: 'Logged in as',
  newUserSignUpNameInput: 'input[data-qa="signup-name"]',
  newUserSignUpEmailInput: 'input[data-qa="signup-email"]',
  newUserSignUpButton: 'button[data-qa="signup-button"]',
  newUserGenderMrRadioButton: '#id_gender1',
  newUserGenderMrsRadioButton: '#id_gender2',
  newUserNameInput: '[data-qa = "name"]',
  newUserPassword: 'input[data-qa = "password"]',
  newUserDayOBirthSelect: 'select[data-qa="days"]',
  newUserMonthOBirthSelect: 'select[data-qa = "months"]',
  newUserYearOBirthSelect: 'select[data-qa = "years"]',
  newUserNewsletterCheckbox: '#newsletter',
  newUserSpecialOfferCheckbox: '#optin',
  newUserFirstNameInput: 'input[data-qa = "first_name"]',
  newUserLastNameInput: 'input[data-qa = "last_name"]',
  newUserCompanyInput: 'input[data-qa = "company"]', 
  newUserAddressInput: 'input[data-qa = "address"]',
  newUserAddress2Input: 'input[data-qa = "address2"]',
  newUserCountrySelect: 'select[data-qa = "country"]',
  newUserStateInput: 'input[data-qa = "state"]',
  newUserCityInput: 'input[data-qa = "city"]',
  newUserZipcodeInput: 'input[data-qa = "zipcode"]',
  newUserMobileNumberInput: 'input[data-qa = "mobile_number"]',
  newUserCreateAccountButton: 'button[data-qa = "create-account"]',
  newUserContinueButton: '[data-qa = "continue-button"]'
};

export const ProductsPageLocators = {
  // Строка поиска
  searchInput: '#search_product',
  searchButton: '#submit_search',

  // Заголовок страницы
  productsTitle: '.features_items > h2',

  // Карточки товаров
  productCard: '.product-image-wrapper',
  productName: '.productinfo p',

  // Кнопка "View Product"
  viewProductLinks: '.product-overlay a',

  // Результаты поиска
  searchedProductsTitle: '.features_items h2',
  searchedProductCard: '.features_items .product-image-wrapper',

  // Категории (слева)
  categorySection: '.left-sidebar .panel-group',
  categoryItem: '.category-products .panel-title a',

  // Бренды (слева)
  brandsSection: '.brands_products',
  brandItem: '.brands-name a',

  // Сообщение "Searched Products"
  searchedProductsHeader: 'h2.title.text-center',

  // "Add to cart" кнопка (внутри overlay)
  addToCartButton: '.product-overlay .add-to-cart',
};

export const CartPageLocators = {
  // Заголовок страницы
  cartTitle: '.breadcrumbs > li.active', // "Shopping Cart"

  // Таблица товаров в корзине
  cartTable: '#cart_info_table',
  cartProductRow: '#cart_info_table tbody tr',

  // Информация о товаре
  productName: '#cart_info_table .cart_description h4 a',
  productPrice: '#cart_info_table .cart_price p',
  productQuantityInput: '#cart_info_table .cart_quantity input',
  productTotal: '#cart_info_table .cart_total p',

  // Кнопка удаления товара (крестик)
  deleteProductButton: '.cart_delete .cart_quantity_delete',

  // Сообщение "Cart is empty!"
  emptyCartMessage: '#empty_cart .text-center b',

  // Кнопка "Proceed To Checkout"
  proceedToCheckoutButton: '.check_out',

  // Кнопка "Register / Login" если неавторизован
  registerLoginButton: 'a[href="/login"]',

  // Купон (если понадобится в будущем)
  couponInput: '#coupon_code',
  applyCouponButton: '#apply_coupon',
};

export const UserAccountPageLocators = {
    UserAccountPageLogout: '.fa.fa-lock',
    UserAccountPageLogged: '.fa.fa-user',
    UserAccountPageDelete: '.fa.fa-trash-o'
};

export const locators = {
  LoginPageLocators,
  HomePageLocators,
  ContactUsPageLocators,
  ProductsPageLocators,
  CartPageLocators,
  UserAccountPageLocators
};