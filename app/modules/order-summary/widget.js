/**
 * Created by ridel1e on 22/10/2016.
 */

import * as templates from './template';

const WIDGET_NAME = 'order-summary';

const widget = (sandbox) => {

  var products = [{
    name: 'The Chelsea Boot',
    color: 'Black',
    quantity: 1,
    imageUrl: 'images/the-chelsea-boot.png',
    price: 235,
  }, {
    name: 'The Twill Snap Backpack',
    color: 'Reverse Denim + Brown leather',
    quantity: 1,
    imageUrl: 'images/the-twill-snap-backpack.png',
    price: 65,
  }, {
    name: 'The Twill Zip Tote',
    color: 'Reverse Denim + Black leather',
    quantity: 1,
    imageUrl: 'images/the-twill-zip-tote.png',
    price: 48,
  }];

  return {
    init,
    destroy
  };

  function init() {
    sandbox.renderTemplate(templates.orderSummary);
    const productList = sandbox.find('.product-list');

    products.forEach((product) => {
      const productElement = createProduct(product);
      sandbox.appendElement(productElement, productList)
    });

    updateTotalPrice();
  }

  function destroy() {

  }

  function updateTotalPrice() {
    const subtotalPriceElement = sandbox.find('.order-summary__subtotal-price');
    const shippingPriceElement = sandbox.find('.order-summary__shipping-price');
    const taxesElement = sandbox.find('.order-summary__taxes');
    const totalPriceElement = sandbox.find('.order-summary__total-price');

    const subtotalPrice = products
      .reduce((sum, product) => { return sum + product.price }, 0);
    const taxes = (subtotalPrice * 0.03).toFixed(2);

    sandbox.appendText(subtotalPriceElement, `$${subtotalPrice}`);
    sandbox.appendText(shippingPriceElement, 'Free');
    sandbox.appendText(taxesElement, `$${taxes}`);
    sandbox.appendText(totalPriceElement, `$${+subtotalPrice + +taxes}`);
  }

  function createProduct(product) {
    const newProduct = sandbox.createElement(templates.productTemplate);

    const productName = sandbox.find('.product__name', newProduct);
    const productColor = sandbox.find('.product__color', newProduct);
    const productQuantity = sandbox.find('.product__quantity', newProduct);
    const productPrice = sandbox.find('.product__price', newProduct);
    const productImage = sandbox.find('.product__image', newProduct);

    sandbox.setAttribute(productImage, 'src', product.imageUrl);
    sandbox.appendText(productName, product.name);
    sandbox.appendText(productColor, product.color);
    sandbox.appendText(productQuantity, `Quantity: ${product.quantity}`);
    sandbox.appendText(productPrice, `$${product.price}`);

    return newProduct;
  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);