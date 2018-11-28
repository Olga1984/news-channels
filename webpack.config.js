var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['whatwg-fetch', '@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }
                ]
            },
            {
                test: /\.json/,
                exclude: /node_modules/,
                use: [{
                    loader: 'custom-loader'
                }
                ]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'News',
        template: './src/index.ejs'
    })]
};