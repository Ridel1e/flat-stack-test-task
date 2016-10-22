/**
 * Created by ridel1e on 20/10/2016.
 */

import 'helpers/globaly-error-handler';
import ApplicationController from 'core/application-controller';

import testWidget from 'modules/test';
testWidget(ApplicationController);

ApplicationController.startAll();