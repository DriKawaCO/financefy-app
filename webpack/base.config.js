const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@app/components': path.resolve(__dirname, '../src/components/index.tsx'),
            '@app/helper': path.resolve(__dirname, '../src/helper/index.tsx'),
            '@app/interfaces': path.resolve(__dirname, '../src/interfaces/index.tsx'),
            '@app/reducers': path.resolve(__dirname, '../src/reducers/index.tsx'),
            '@app/routes': path.resolve(__dirname, '../src/routes/index.tsx'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png)$/,
                exclude: /node_modules/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
};

module.exports = config;
