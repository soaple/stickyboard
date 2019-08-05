// webpack.prod.js

const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'app-client.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-export-default-from',
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                }
            },
        }, {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                },
            }),
        ],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.join(__dirname, 'dist', 'lib-manifest.json'))
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env': { BROWSER: JSON.stringify(true) }
        }),
        new webpack.ProvidePlugin({
            'd3': 'd3'
        }),
    ]
}

module.exports = config
