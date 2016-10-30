/**
 * Created by ridel1e on 24/10/2016.
 */

import Handlebars from 'handlebars';
import InvalidArgumentsError from 'helpers/errors/invalid-arguments-error';

const EXTENSION_NAME = 'templateEngine';

const extension = (() => {
  return {
    compile,
    render,
  };

  function compile(template) {
    if(typeof template === 'string') {
      return Handlebars.compile(template)
    }
    else {
      throw new InvalidArgumentsError('compile', 'First argument must be a string');
    }
  }

  function render(template, context) {
    if(template instanceof Function && context instanceof Object) {
      return template(context);
    }
    else {
      throw new InvalidArgumentsError('render', 'First argument must be a Function, ' +
        'second argument must be an Object');
    }
  }
})();

export default (ApplicationController) =>
  ApplicationController.extend(EXTENSION_NAME, extension)