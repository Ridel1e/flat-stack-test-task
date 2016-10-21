/**
 * Created by ridel1e on 21/10/2016.
 */

const WIDGET_NAME = 'test';

const widget = (sandbox) => {
  return {
    init,
    destroy
  };

  function init() {
    sandbox.renderTemplate('<h2>HELLO, MY FRIEND!</h2><button class="button">HELLO</button>');
    const button = sandbox.find('.button');
    sandbox.addEventListener(button, 'click', function () {
      const newElement = sandbox.createElement('<p>New Record</p>');

      sandbox.addEventListener(newElement, 'click', () => { sandbox.removeElement(newElement) });
      
      sandbox.appendElement(newElement);
    })
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);