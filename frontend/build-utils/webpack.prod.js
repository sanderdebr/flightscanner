// const path = require('path');
// const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    // new Dotenv({
    //   path: path.resolve(__dirname, '..', './.env.production'),
    // }),
    new CompressionPlugin(),
  ],
};
