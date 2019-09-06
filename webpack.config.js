const path = require('path');

module.exports = {
  entry: path.resolve('src/public'),
  output: {
    path: path.resolve('dist/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
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
