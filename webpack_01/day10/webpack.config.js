var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve("./src"),
  entry: "./app.js",
  output: {
  	path: path.resolve("./dist"),
  	filename: "js/[name].js"
  },
  module: {
  	rules: [
  	  {
  	  	test: /\.js$/,
  	  	use: [
  	  	  {
  	  	  	loader: "babel-loader",
  	  	  	options: {
  	  	  	  presets: ["env"]
  	  	  	}
  	  	  }
  	  	],
  	  	include: path.resolve("./src"),
  	  	exclude: /node_modules/
  	  },
  	  {
  	  	test: /\.html$/,
  	  	use: "html-loader"
  	  },
  	  {
  	  	test: /\.ejs$/,
  	  	use: "ejs-loader"
  	  }
  	]
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: "../index.html",
  	  filename: "index.html"
  	})
  ]
}