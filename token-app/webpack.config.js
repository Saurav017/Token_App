const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 8080,
    },
    performance: {
      hints: false  
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'token_app',
            filename: 'remoteEntry.js',
            exposes: {
                './TokenGenerator.js': './src/TokenGenerator.js',
                './tokenWrapper': './src/tokenWrapper.js'
            }
        }),

        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]

}