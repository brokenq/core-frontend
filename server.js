require('./env.config')();
console.log("environment: %s", process.env['profile']);

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config;
var configOptions = {};
if ('local' == process.env['profile']) {
  config = require('./config/webpack/webpack.local.config');
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:'+process.env['port']+'/', "webpack/hot/dev-server");
  configOptions = {
    hot: true,
    compress: true,
    stats: {
      colors: true
    }
  };
} else {
  config = require('./config/webpack/webpack.' + process.env['profile'] + '.config');
  configOptions = {
    compress: true
  }
}
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, configOptions);

server.listen(process.env['port'], function(){
  console.log('server listening at http://localhost:%s', process.env['port']);
});