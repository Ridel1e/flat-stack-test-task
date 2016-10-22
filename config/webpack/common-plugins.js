/**
 * Created by ridel1e on 20/10/2016.
 */

const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  })
];