const path = require('path');

module.exports = {
  entry: path.resolve('src'),
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.resolve('lib'),
    compress: true,
    port: process.env.PORT || 3000,
  },
};
