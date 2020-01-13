const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

module.exports = {
  entry: resolveFromRootPath('src/index.ts'),
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: resolveFromRootPath('dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: resolveFromRootPath('dist')
  }
};
