var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
  	main: "./js/main.js",
  	a: "./js/a.js",
  	b: "./js/b.js",
  	c: "./js/c.js"
  },
  output: {
  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name].js",		//若是"./js/[name].js"html中路径为.././形式
    publicPath: "http://cdn.com/"
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: "./html/index.html",
  	  filename: "./html/a.html",
  	  title: "this is a.html",
  	  //chunks: ["main", "a"]
  	  excludeChunks: ["b", "c"],
      inject: false
  	}),
  	new htmlWebpackPlugin({
  	  template: "./html/index.html",
  	  filename: "./html/b.html",
  	  title: "this is b.html",
  	  //chunks: ["main", "b"]
      excludeChunks: ["a", "c"],
      inject: false
  	}),
  	new htmlWebpackPlugin({
  	  template: "./html/index.html",
  	  filename: "./html/c.html",
  	  title: "this is c.html",
  	  //chunks: ["main", "c"]
      excludeChunks: ["a", "b"],
      inject: false
  	})
  ]
}