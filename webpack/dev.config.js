const baseConfig = require('./base.config');
const path = require('path');
const fs = require('fs');

const devConfig = {
    ...baseConfig,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9000,
        http2: true,
        https: {
            key: fs.readFileSync(path.join(__dirname, '../cert/financefy.key')),
            cert: fs.readFileSync(path.join(__dirname, '../cert/financefy.pem')),
        },
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
