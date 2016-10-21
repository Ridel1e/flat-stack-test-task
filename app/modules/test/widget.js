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
      sandbox.emit('product:add', {
        name: 'hey',
        desc: 'hey1'
      });
    });

    sandbox.subscribe([{
      eventName: 'product:add',
      callback: function (data) {
        console.log(data)
      }
    }]);
  }

  function destroy() {

  }
};

export default (ApplicationController) =>
  ApplicationController.register(WIDGET_NAME, widget);