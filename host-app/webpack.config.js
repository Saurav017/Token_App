const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');



module.exports = {

    output: {
        publicPath:"http://localhost:3000/"
    },
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 3000,
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
            name: 'host_app',
            filename: 'index.js',
            remotes: {
              tokenA : 'token_app@http://localhost:8080/remoteEntry.js'
            } 
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]

}