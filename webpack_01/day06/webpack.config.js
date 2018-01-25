var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./app.js",
  output: {
  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name].bundle.js",
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: "../index.html",
  	  filename: "./index.html",
  	  inject: "body"
  	})
  ]
}