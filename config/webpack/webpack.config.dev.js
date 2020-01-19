const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);
const BASE_URL = process.env.base_url || 'http://localhost:3000';
const ENDPOINT = process.env.endpoint || `${BASE_URL}/hostapps`;

module.exports = {
  entry: ['@babel/polyfill', resolveFromRootPath('src/index.ts')],
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: resolveFromRootPath('dist'),
    compress: true,
    port: 9000,
    disableHostCheck: true,
  },
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.ts', '.js'],
    alias: {
      components: path.resolve(resolveFromRootPath('src/components')),
      api: resolveFromRootPath('src/api'),
      model: resolveFromRootPath('src/model'),
      mock: resolveFromRootPath('src/mock'),
      types: resolveFromRootPath('src/types'),
      utils: path.resolve(resolveFromRootPath('src/utils')),
    }
  },
  output: {
    filename: 'bundle.js',
    path: resolveFromRootPath('dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENDPOINT__: JSON.stringify(ENDPOINT)
    }),
  ],
};