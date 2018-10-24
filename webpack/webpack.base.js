const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (SRC_DIR, BUILD_DIR) => ({
  entry: SRC_DIR + 'index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + 'index.ejs',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
