/**
 * Created by ridel1e on 22/10/2016.
 */

window.onerror = (msg, url, line, col, error) => {
  if(NODE_ENV === 'production') {
    // some log action.
    return true;
  }
  else {
    // some devtools
    return false;
  }
};