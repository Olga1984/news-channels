const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: ['whatwg-fetch', '@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "/build/"
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
                test: /\.js$|\.json/,
                exclude: /node_modules/,
                use: [{
                    loader: 'custom-loader'
                }
                ]
            },
        ]
    }
};