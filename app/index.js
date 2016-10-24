/**
 * Created by ridel1e on 20/10/2016.
 */

import 'helpers/globaly-error-handler';
import ApplicationController from 'core/application-controller';

import orderForm from 'modules/order-form';
orderForm(ApplicationController);
import orderSummary from 'modules/order-summary';
orderSummary(ApplicationController);
import cart from 'modules/cart';
cart(ApplicationController);


ApplicationController.startAll();