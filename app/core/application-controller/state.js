/**
 * Created by ridel1e on 30/10/2016.
 */

import InvalidArgumentsError from 'helpers/errors/invalid-arguments-error';

const EXTENSION_NAME = 'state';

const extension = (() => {
  var listeners = [];
  var state = {};
  var reducers = {};

  return {
    createStore,
    getState,
    dispatch,
  };

  /**
   * Dispatch state about some action
   * @param action
   */
  function dispatch(action) {
    if(action instanceof Object) {
      Object.keys(reducers).forEach((reducerName) =>
        state[reducerName] = reducers[reducerName](state[reducerName], action));

      listeners.forEach((listener) => listener(state));
    }
    else {
      const message = 'First argument must be an Object';
      throw new InvalidArgumentsError('dispatch', message);
    }
  }

  /**
   * Returns current state
   * @returns {{}}
   */
  function getState() {
    return state
  }

  /**
   *
   */
  function listen() {

  }

  /**
   * Creates a store with combined reducer
   * @param combinedReducer
   */
  function createStore(combinedReducer) {
    if(combinedReducer instanceof Object) {
      reducers = combinedReducer;
      this.dispatch({
        type: '//initialAction'
      })
    }
    else {
      const message = 'First argument must be an Object';
      throw new InvalidArgumentsError('createStore', message);
    }
  }
})();

export default (ApplicationController) =>
  ApplicationController.extend(EXTENSION_NAME, extension);