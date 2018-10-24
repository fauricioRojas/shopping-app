const path = require('path');
const merge = require('webpack-merge');

const getWebpackBase = require('./webpack/webpack.base');
const webpackDev = require('./webpack/webpack.dev');
const webpackProd = require('./webpack/webpack.prod');

const SRC_DIR = path.join(__dirname, '/src/');
const BUILD_DIR = path.join(__dirname, '/dist/');

module.exports = (env, argv) => {
  const webpackBase = getWebpackBase(SRC_DIR, BUILD_DIR);
  return argv.mode === 'development'
    ? merge(webpackBase, webpackDev)
    : merge(webpackBase, webpackProd);
};
