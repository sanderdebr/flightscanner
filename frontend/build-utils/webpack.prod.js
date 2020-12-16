/* eslint-disable */
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new CompressionPlugin(),
  ],
};
