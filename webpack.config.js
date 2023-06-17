const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'public/index.html' })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      services: path.resolve(__dirname, "src/services"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
