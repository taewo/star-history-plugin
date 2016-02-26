module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map', // for source map
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
