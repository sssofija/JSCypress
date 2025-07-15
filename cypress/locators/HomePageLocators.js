export const HomePageLocators = {
  // Навбар / верхнее меню
  navBar: '.navbar-nav',
  homeLink: 'a[href="/"]',
  productsLink: 'a[href="/products"]',
  cartLink: 'a[href="/view_cart"]',
  signupLoginLink: 'a[href="/login"]',
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
