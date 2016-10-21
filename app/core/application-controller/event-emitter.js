/**
 * Created by ridel1e on 21/10/2016.
 */

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

    }
  }
})();

export default (ApplicationController) =>
  ApplicationController.extend(EXTENSION_NAME, extension);