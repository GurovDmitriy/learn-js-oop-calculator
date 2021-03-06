/* eslint-disable no-undef */
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./docs",
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
}
