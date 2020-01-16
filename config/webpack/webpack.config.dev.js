const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

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
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
};
