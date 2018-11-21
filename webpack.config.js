const path = require('path');

module.exports = {
    entry: ['whatwg-fetch', '@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};