const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/script/app.ts')],
    vendors: [
      'angular',
      'jquery',
      'lodash',
      'bootstrap/dist/css/bootstrap.css',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts'
    },{
      test: /\.jade$/,
      loader: 'jade'
    },{
      test: /\.sass$/,
      loader: 'style!css!postcss!sass'
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=25000'
    },{
      test: /\.(woff|woff2|eot|ttf|svg)\??.*$/,
      loader: 'url?limit=100000'
    },{
      test: /\.json$/,
      loader: 'json'
    }]
  },
  postcss: function() {return [precss, autoprefixer];},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.jade'),
      favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],
  resolve: {
    modulesDirectories: ["bower_components"],
    alias: { }
  }
};