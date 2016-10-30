/**
 * Created by ridel1e on 22/10/2016.
 */

const orderSummary = [
  '<aside class="order-summary">',
    '<header class="order-summary__header">',
      '<span class="order-summary__title" >Order Summary</span>',
      '<a class="order-summary__edit-order-link" href="#">edit order</a>',
    '</header>',
    '<ul class="product-list"></ul>',
    '<div class="card order-summary__subtotal-info-container">',
      '<div class="order-summary__info-group">',
        'Subtotal',
        '<span class="order-summary__subtotal-price"></span>',
      '</div>',
      '<div class="order-summary__info-group">',
        'Shipping',
        '<span class="order-summary__shipping-price"></span>',
      '</div>',
      '<div class="order-summary__info-group">',
        'Taxes',
        '<span class="order-summary__taxes"></span>',
      '</div>',
    '</div>',
    '<div class="order-summary__info-group order-summary__info-group_name_total-price">',
      'Total',
      '<span class="order-summary__total-price">{{ totalPrice }}</span>',
    '</div>',
  '</aside>'
].join('');

const productTemplate = [
  '<li class="card product">',
    '<img class="product__image">',
    '<div class="product__info-block">',
      '<div class="product__name">{{ name }}</div>',
      '<div class="product__color">{{ attributes }}</div>',
      '<div class="product__quantity">{{ quantity }}</div>',
    '</div>',
    '<div class="product__price"></div>',
  '</li>',
].join('');

export { orderSummary, productTemplate };