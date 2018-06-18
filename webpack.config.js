const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
let appEntry = [
    'react-hot-loader/patch',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/index.js'),

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
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|.cache)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
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