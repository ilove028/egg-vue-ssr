const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
const CleanWepackPlugin = require('clean-webpack-plugin');

module.exports = merge(config, {
  entry: path.join(__dirname, '../client/entry-client.js'),
  plugins: [
    new CleanWepackPlugin('app/public', { root: path.join(__dirname, '..') }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
});