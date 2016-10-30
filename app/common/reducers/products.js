/**
 * Created by ridel1e on 30/10/2016.
 */

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [
        ...action.payload
      ];

    default:
      return state;
  }
}