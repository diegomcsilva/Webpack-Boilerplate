const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');


module.exports = {
    // vendor is script of the third-party 
    entry: {
        app: './assets/script/index.js',
        vendor: 'jquery',
    },
    output: {
        // [hash] for generate files bundle with names diferente for discard cache
        // filename: '[hash].bundle.js', // id  da compilação do pacote
        // filename: '[name].[chunkhash].bundle.js', // id  da compilação do pedaço | do modulo
        filename: '[name].bundle.js',  // nome do item no entry
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs',
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest',
        }),
    ],
 
};
