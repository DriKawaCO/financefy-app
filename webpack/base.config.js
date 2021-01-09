const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;