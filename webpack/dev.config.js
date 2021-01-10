const baseConfig = require('./base.config');
const path = require('path');

const devConfig = {
    ...baseConfig,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
        progress: true,
        historyApiFallback: true,
        publicPath: '/',
    },
};

module.exports = devConfig;
