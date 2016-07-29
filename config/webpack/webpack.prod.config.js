var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var env = require('../env/prod.json');
config.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'bundle.js'
};
config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, mangle: false}));
config.plugins.push(new webpack.DefinePlugin({env_profile: JSON.stringify(env)}));
module.exports = config;