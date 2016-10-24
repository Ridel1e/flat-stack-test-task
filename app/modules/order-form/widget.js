/**
 * Created by ridel1e on 22/10/2016.
 */

import template from './template';

const WIDGET_NAME = 'order-form';

const widget = (sandbox) => {
  return {
    destroy,
    init,
  };

  function init() {
    sandbox.renderTemplate(template);

    const button = sandbox.find('.order-form__button');
    sandbox.addEventListener(button, 'click', () => console.log('pushed'));
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);