module.exports = {
  entry: __dirname + "/jobResultCollector.js",
  target: 'node',
  output: {
    path: __dirname + "/public",
    filename: "jobResultCollectorBundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
