/**
 * Created by ridel1e on 22/10/2016.
 */

import template from './template';

const WIDGET_NAME = 'order-summary';

const widget = (sandbox) => {
  return {
    init,
    destroy
  };

  function init() {
    const products = sandbox.getState().products;
    const subtotalPrice = products
      .reduce((sum, product) => { return sum + product.price }, 0);
    const taxes = subtotalPrice * 0.03;

    const context = {
      products: products,
      subtotalPrice: subtotalPrice,
      taxes: taxes,
      totalPrice: subtotalPrice + taxes
    };

    sandbox.renderTemplate(template, context);
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);