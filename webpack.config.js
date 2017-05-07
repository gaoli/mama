const path = require('path');

module.exports = {
  entry: {
    'index/index': './pages/index/index.ts'
  },
  output: {
    path: path.join(__dirname, 'pages'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader',
      }],
    }],
  },
};
