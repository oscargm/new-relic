const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);
const ENDPOINT = process.env.endpoint || `./host-app-data.json`;
module.exports = {
  entry: ['@babel/polyfill', resolveFromRootPath('src/index.ts')],
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolveFromRootPath('dist'),
  },
  plugins: [
    new webpack.DefinePlugin({ __ENDPOINT__: JSON.stringify(ENDPOINT) }),
  ],
};
