var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
module.exports = {
    entry:  {
        "app1": path.join(__dirname, 'assets/src/js/index'),
        "app2": path.join(__dirname, 'assets/src/js/index2'),
    },
    output: {
        path: path.join(__dirname, 'assets/dist'),
        filename: '[name]-[hash].js'
    },
    plugins: [
        new BundleTracker({
            path: __dirname,
            filename: 'webpack-stats.json'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
}