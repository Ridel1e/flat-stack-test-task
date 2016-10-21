/**
 * Created by ridel1e on 11/09/16.
 */

import express from 'express';

const server = express();

server.set('port', 5000);
server.use(express.static(`${__dirname}/public`));

server.listen(server.get('port'), () =>
  console.log(`server listening on port: ${server.get('port')} `));