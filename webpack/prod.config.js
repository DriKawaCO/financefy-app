const baseConfig = require('./base.config');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const prodConfig = {
    ...baseConfig,
    mode: 'production',
    devtool: 'cheap-source-map',
    optimization: {
        minimizer: [new TerserWebpackPlugin()],
    },
};

module.exports = prodConfig;
