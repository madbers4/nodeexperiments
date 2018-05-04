let webpack = require('webpack');
let path = require('path');

module.exports = {
    mode: 'development',
    entry: './frontend.js',
    output: {
        filename: './../web/index.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
};