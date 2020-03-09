// webpack.dev.js

const webpack = require('webpack')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'production';
const isProductionMode = NODE_ENV === 'production';
const isWebpackDevServerMode = process.env.WEBPACK_DEV_SERVER_MODE === 'true';
console.log('================ webpack.app.js ================');
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`isProductionMode: ${isProductionMode}`);
console.log(`isWebpackDevServerMode: ${isWebpackDevServerMode}`);
console.log('================================================');

// Load .env configuration
const envFilePath = isProductionMode ? '.env' : '.env.development';
const envLoadResult = require('dotenv').config({ path: envFilePath }).parsed;
if (envLoadResult.error) {
    throw envLoadResult.error;
}
// reduce it to an object
const envKeys = Object.keys(envLoadResult).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envLoadResult[next]);
    return prev;
}, {});

const config = {
    mode: NODE_ENV,
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: isWebpackDevServerMode ? 'http://localhost:8080/' : '/dist/',
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
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-transform-runtime',
                        [
                            'babel-plugin-transform-imports',
                            {
                                '@material-ui/core': {
                                    'transform': '@material-ui/core/esm/${member}',
                                    'preventFullImport': true
                                },
                                '@material-ui/icons': {
                                    'transform': '@material-ui/icons/esm/${member}',
                                    'preventFullImport': true
                                }
                            }
                        ]
                    ]
                }
            },
        }, {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name(file) {
                        if (process.env.NODE_ENV === 'development') {
                            return '[path][name].[ext]';
                        }

                        return '[contenthash].[ext]';
                    },
                },
            }
        }]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            react: path.resolve('./node_modules/react')
        },
        symlinks: false,
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.join(__dirname, 'dist', 'lib-manifest.json'))
        }),
        new webpack.DefinePlugin(envKeys),
        // Ignore all locale files of moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        fs: 'empty'
    }
}

// Add devServer config if the mode is webpack dev server mode
if (isWebpackDevServerMode) {
    config['devServer'] = {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        inline: true,
        compress: true,
        public: 'localhost:8080',
    };
}

module.exports = config
