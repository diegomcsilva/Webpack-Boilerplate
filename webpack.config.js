const webpack = require('webpack');
const path = require('path');


module.exports = {
    // vendor is script of the third-party 
    entry: {
        app: './assets/script/index.js',
    },
    output: {
        // [hash] for generate files bundle with names diferente for discard cache
        // filename: '[hash].bundle.js', // id  da compilação do pacote
        // filename: '[name].[chunkhash].bundle.js', // id  da compilação do pedaço | do modulo
        filename: '[name].bundle.js',  // nome do item no entry
        path: path.resolve(__dirname, 'dist'),
    }
};
