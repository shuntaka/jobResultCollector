module.exports = {
  entry: __dirname + "/RPATaskConsumer.js",
  target: 'node',
  output: {
    path: __dirname + "/public",
    filename: "RPATaskConsumerBundle.js"
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
