/**
 * Created by ridel1e on 20/10/2016.
 */


import 'helpers/globaly-error-handler';
import ApplicationController from 'core/application-controller';

import productReducer from 'common/reducers/products';

import orderForm from 'modules/order-form';
orderForm(ApplicationController);
import orderSummary from 'modules/order-summary';
orderSummary(ApplicationController);
import cart from 'modules/cart';
cart(ApplicationController);

// need refactor
ApplicationController.state.createStore({
  products: productReducer
});
ApplicationController.state.dispatch({
  type: 'FETCH_PRODUCTS',
  payload: [{
    id: 1,
    name: 'The Chelsea Boot',
    attributes: 'Black',
    quantity: 1,
    imageUrl: 'images/the-chelsea-boot.png',
    price: 235,
  }, {
    id: 2,
    name: 'The Twill Snap Backpack',
    attributes: 'Reverse Denim + Brown leather',
    quantity: 1,
    imageUrl: 'images/the-twill-snap-backpack.png',
    price: 65,
  }, {
    id: 3,
    name: 'The Twill Zip Tote',
    attributes: 'Reverse Denim + Black leather',
    quantity: 1,
    imageUrl: 'images/the-twill-zip-tote.png',
    price: 48,
  }]
});

ApplicationController.startAll();