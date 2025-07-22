export const ContactUsPageLocators = {
  contactUsTitle: '.contact-form h2.title.text-center',
  nameInput: 'input[data-qa="name"]',
  emailInput: '[data-qa="email"]',
  subjectInput: '[data-qa="subject"]',
  messageTextarea: '[data-qa="message"]',
  uploadFileInput: 'input[name="upload_file"]',
  submitButton: '[data-qa="submit-button"]',
  successAlert: '.status.alert.alert-success',
  homeButton: '.btn.btn-success',
  formError: '.contact-form .text-danger',
};

export const HomePageLocators = {
  navBar: '.navbar-nav',
  homeLink: 'a[href="/"]',
  productsLink: 'a[href="/products"]',
  cartLink: 'a[href="/view_cart"]',
  signupLoginLink: 'a[href="/login"]',
  testCasesLink: 'a[href="/test_cases"]',
  logoutLink: 'a[href="/logout"]',
  contactUsLink: 'a[href="/contact_us"]',
  siteLogo: '.navbar-brand',
  mainSlider: '#slider-carousel',
  sliderItem: '.carousel-inner .item',
  featuresTitle: '.features_items > h2',
  productBlock: '.features_items .product-image-wrapper',
  productName: '.features_items .productinfo p',
  addToCartButton: '.features_items .add-to-cart',
  leftSidebar: '.left-sidebar',
  categorySection: '.panel-group.category-products',
  categoryItem: '.panel-group.category-products .panel-title a',
  brandsSection: '.brands_products',
  brandItem: '.brands-name a',
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
  searchInput: '#search_product',
  searchButton: '#submit_search',
  productsTitle: '.features_items > h2',
  productCard: '.product-image-wrapper',
  productName: '.productinfo p',
  viewProductLinks: '.product-overlay a',
  searchedProductsTitle: '.features_items h2',
  searchedProductCard: '.features_items .product-image-wrapper',
  categorySection: '.left-sidebar .panel-group',
  categoryItem: '.category-products .panel-title a',
  brandsSection: '.brands_products',
  brandItem: '.brands-name a',
  searchedProductsHeader: 'h2.title.text-center',
  addToCartButton: '.product-overlay .add-to-cart',
};

export const CartPageLocators = {
  cartTitle: '.breadcrumbs > li.active',
  cartTable: '#cart_info_table',
  cartProductRow: '#cart_info_table tbody tr',
  productName: '#cart_info_table .cart_description h4 a',
  productPrice: '#cart_info_table .cart_price p',
  productQuantityInput: '#cart_info_table .cart_quantity input',
  productTotal: '#cart_info_table .cart_total p',
  deleteProductButton: '.cart_delete .cart_quantity_delete',
  emptyCartMessage: '#empty_cart .text-center b',
  proceedToCheckoutButton: '.check_out',
  registerLoginButton: 'a[href="/login"]',
  couponInput: '#coupon_code',
  applyCouponButton: '#apply_coupon',
};

export const UserAccountPageLocators = {
    userAccountPageLogout: '.fa.fa-lock',
    userAccountPageLogged: '.fa.fa-user',
    userAccountPageDelete: '.fa.fa-trash-o'
};

export const locators = {
  LoginPageLocators,
  HomePageLocators,
  ContactUsPageLocators,
  ProductsPageLocators,
  CartPageLocators,
  UserAccountPageLocators
};