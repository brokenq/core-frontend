const webpack = require('webpack');
var config = require('./webpack.config');
var env = require('../env/local.json');
config.devServer = {process: true};
config.devtool = "#eval";
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({env_profile: JSON.stringify(env)}));
module.exports = config;