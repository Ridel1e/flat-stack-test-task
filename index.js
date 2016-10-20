/**
 * Created by ridel1e on 11/09/16.
 */

'use strict';

var express = require('express');

var server = express();

server.set('port', 10000);
server.use(express.static(__dirname));

server.listen(server.get('port'), function () {
  console.log("server listening on port: "
    + server.get('port'));
});