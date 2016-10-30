/**
 * Created by ridel1e on 24/10/2016.
 */

import template from './template';

const WIDGET_NAME = 'basket';

const widget = (sandbox) => {

  return {
    destroy,
    init,
  };

  function init() {
    const products = sandbox.getState().products;

    const context = {
      productCount: products.length
    };

    sandbox.renderTemplate(template, context);
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);