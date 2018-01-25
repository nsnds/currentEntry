var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./app.js",
  output: {
  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env"] }
          }
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src")
      }
    ]
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: "../index.html",
  	  filename: "./index.html",
  	  inject: "body"
  	})
  ]
}