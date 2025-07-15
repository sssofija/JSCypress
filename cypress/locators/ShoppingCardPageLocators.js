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
