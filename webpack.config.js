var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  mode: "development",
  entry: {
    app1: path.join(__dirname, "assets/src/js/index"),
    app2: path.join(__dirname, "assets/src/js/index2"),
  },
  output: {
    path: path.join(__dirname, "assets/dist"),
    filename: "[name]-[hash].js",
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
