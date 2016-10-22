/**
 * Created by ridel1e on 22/10/2016.
 */

import CustomError from './custom-error';

class InvalidArgumentsError extends CustomError {
  constructor(method, message) {
    const templateMessage = 'method got invalid arguments';
    super(method, `${templateMessage}.${message}`);
    this.name = 'InvalidArgumentsError';
  }
}

export default InvalidArgumentsError;