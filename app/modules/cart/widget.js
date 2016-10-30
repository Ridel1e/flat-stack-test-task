/**
 * Created by ridel1e on 24/10/2016.
 */

import template from './template';

const WIDGET_NAME = 'basket';

const widget = (sandbox) => {
  var productCount = 3;

  return {
    destroy,
    init,
  };

  function init() {
    sandbox.renderTemplate(template);

    const productCounterElement = sandbox.find('.basket__product-counter');
    sandbox.appendText(productCounterElement, productCount)
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);