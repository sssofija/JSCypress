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
