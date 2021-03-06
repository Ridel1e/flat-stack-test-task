/**
 * Created by ridel1e on 20/10/2016.
 */

import Sandbox from 'core/sandbox';
import InvalidArgumentsError from 'helpers/errors/invalid-arguments-error';

export default (() => {

  var moduleData = {};

  return {
    extend,
    register,
    start,
    startAll,
    stop,
    stopAll
  };

  /**
   * Extends application controller
   * @param name
   * @param extension
   */
  function extend(name, extension) {
    if(typeof name === 'string' && extension instanceof Object) {
      this[name] = extension;
    }
    else {
      const message = 'first argument must be a string, second argument must be an Object';
      throw new InvalidArgumentsError('extend', message);
    }
  }

  /**
   * Registers module in application controller
   * @param moduleName
   * @param creator
   */
  function register(moduleName, creator) {
    if(typeof moduleName === 'string' && creator instanceof Function) {
      moduleData[moduleName] = {
        creator: creator,
        instance: null
      }
    }
    else {
      const message = 'first argument must be a string, second argument must be a Function';
      throw new InvalidArgumentsError('register', message);
    }
  }

  /**
   * Starts specific module
   * @param moduleName
   */
  function start(moduleName) {
    if(typeof moduleName === 'string') {
      moduleData[moduleName].instance =
        moduleData[moduleName].creator(new Sandbox(this, moduleName));

      try {
        moduleData[moduleName].instance.init();
      }
      catch (e) {
        console.error(e);
      }
    }
    else {
      const message = 'first argument must be a string';
      throw new InvalidArgumentsError('start', message);
    }
  }

  /**
   * Starts all modules
   */
  function startAll() {
    Object.keys(moduleData).forEach((moduleName) => this.start(moduleName));
  }

  /**
   * Stops specific module
   * @param moduleName
   */
  function stop(moduleName) {
    if(typeof moduleName === 'string') {
      
      try {
        moduleData[moduleName].instance.destroy();
        moduleData[moduleName].instance = null;
      }
      catch (e) {
        console.error(e);
      }
    }
    else {
      const message = 'first argument must be a string';
      throw new InvalidArgumentsError('stop', message);
    }
  }

  /**
   * Stops all modules
   */
  function stopAll() {
    Object.keys(moduleData).forEach((moduleName) => this.stop(moduleName));
  }
})();


