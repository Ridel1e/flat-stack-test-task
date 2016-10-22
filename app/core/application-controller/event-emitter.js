/**
 * Created by ridel1e on 21/10/2016.
 */

import InvalidArgumentsError from 'helpers/errors/invalid-arguments-error';

const EXTENSION_NAME = 'eventEmitter';

const extension = (() => {

  const events = {};

  return {
    emit,
    subscribe,
    unsubscribe
  };

  /**
   * Emits specific event
   * @param eventName
   * @param data
   */
  function emit(eventName, data) {
    if(typeof eventName === 'string') {
      if(!(events[eventName] instanceof Object)) {
        events[eventName] = {
          listeners: []
        };
      }
      events[eventName].listeners
        .forEach((listener) => listener(data));
    }
    else {
      const message = 'first argument must be a string';
      throw new InvalidArgumentsError('emit', message);
    }
  }

  /**
   * Subscribes listener to specific event
   * @param eventName
   * @param callback
   */
  function subscribe(eventName, callback) {
    if(typeof eventName === 'string' && callback instanceof Function) {
      if(!(events[eventName] instanceof Object)) {
        events[eventName] = {
          listeners: []
        };
      }

      events[eventName].listeners.push(callback);
    }
    else {
      const message = 'first argument must be a string, ' +
        'second argument must be a Function';
      throw new InvalidArgumentsError('subscribe', message);
    }
  }

  /**
   * Unsubscribes listener to specific event
   * @param eventName
   * @param callback
   */
  function unsubscribe(eventName, callback) {
    if(typeof  eventName === 'string' && callback instanceof Function) {
      if(!(events[eventName] instanceof Object)) {
        events[eventName] = {
          listeners: []
        };
      }

      events[eventName].listeners =
          events[eventName].listeners.filter((listener) => listener !== callback);
    }
    else {
      const message = 'first argument must be a string, ' +
        'second argument must be a Function';
      throw new InvalidArgumentsError('unsubscribe', message);
    }
  }
})();

export default (ApplicationController) =>
  ApplicationController.extend(EXTENSION_NAME, extension);