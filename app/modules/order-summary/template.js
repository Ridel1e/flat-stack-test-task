/**
 * Created by ridel1e on 22/10/2016.
 */

const orderSummary = [
  '<aside class="order-summary">',
    '<header class="order-summary__header">',
      '<span class="order-summary__title" >Order Summary</span>',
      '<a class="order-summary__edit-order-link" href="#">edit order</a>',
    '</header>',
    '<div class="product-list">',
    '</div>',
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
        '<span>Taxes</span>',
        '<span class="order-summary__taxes"></span>',
      '</div>',
    '</div>',
    '<div class="order-summary__info-group" style="margin: 15px 10px 0; font-size: 12px; color: #431C5D; font-weight: bolder">',
      'Total',
      '<div class="order-summary__total-price"></div>',
    '</div>',
  '</aside>'
].join('');

const productTemplate = [
  '<article class="card product">',
  '<img class="product__image">',
  '<div class="product__info-block">',
    '<div class="product__name"></div>',
    '<div class="product__color"></div>',
    '<div class="product__quantity"></div>',
  '</div>',
  '<div class="product__price"></div>',
  '</article>',
].join('');

export { orderSummary, productTemplate };