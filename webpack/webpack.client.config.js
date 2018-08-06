const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');

module.exports = merge(config, {
  entry: path.join(__dirname, '../client/entry-client.js'),
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
});