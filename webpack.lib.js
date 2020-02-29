// webpack.lib.js

const webpack = require('webpack')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'production';
const isProductionMode = NODE_ENV === 'production';
console.log('================ webpack.lib.js ================');
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`isProductionMode: ${isProductionMode}`);
console.log('================================================');

module.exports = {
    mode: NODE_ENV,
    entry: {
        'lib': [
            'react',
            'react-dom',
            'react-router-dom',
            'react-dropzone',
            'redux',
            'react-redux',
            'styled-components',
            '@material-ui/core',
            '@material-ui/icons',
        ],
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        library: '[name]_lib',
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_lib'
        }),
    ],
    node: {
        fs: 'empty'
    }
}
