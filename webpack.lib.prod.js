// webpack.lib.js

const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        'lib': [
            'react',
            'react-dom',
            'react-dropzone',
            'react-router',
            'request',
            '@material-ui/core',
            '@material-ui/icons',
            'underscore',
            'json-loader',
            'dateformat'
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
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false },
        //     mangle: true,
        //     sourcemap: false,
        //     beautify: false,
        //     dead_code: true
        // }),
    ],
    node: {
        fs: 'empty'
    }
}
