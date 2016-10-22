/**
 * Created by ridel1e on 22/10/2016.
 */

class CustomError extends Error {
  constructor(method, message) {
    super(`${method}(): ${message}`);
    this.name = 'CustomError';
  }
}

export default CustomError;