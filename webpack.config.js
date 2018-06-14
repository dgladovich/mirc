const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
let appEntry = [
    path.join(__dirname, 'client/index.js'),
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server'
];

module.exports = {
    entry: appEntry,
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    target: 'web',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/assets/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),

    ]
};