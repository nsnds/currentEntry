var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
  	main: "./js/main.js",
  	a: "./js/a.js"
  },
  output: {
  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name].js",
  	publicPath: "http://cdn.com/"
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: "./html/index.html",
  	  filename: "./html/index-[hash].html",
  	  inject: false,
  	  title: "webpack is good!",
  	  date: new Date(),
  	  chunks: ["main", "a"],
  	  minify: {
  	  	removeComments: true,
  	  	collapseWhitespace: true
  	  }
  	})
  ]
}