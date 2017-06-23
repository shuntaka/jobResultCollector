module.exports = {
  entry: __dirname + "/RPATaskProducer.js",
  target: 'node',
  output: {
    path: __dirname + "/public",
    filename: "RPATaskProducerBundle.js"
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
