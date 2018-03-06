const webpack = require('webpack');
const rootDir = process.cwd();
const copyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: __dirname + '/app.js',
    output: {
        path: rootDir + '/build/browser',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 3344,
        host: '172.168.1.70'
    },
    plugins: [
        new copyPlugin([{
            from: rootDir + '/index.html',
            to: rootDir + '/build/browser'
        }])
    ],
    devtool: '#eval-source-map'
};