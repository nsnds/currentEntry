var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
  	// main: path.resolve(__dirname, "./src/script/main.js"),
  	main: "./script/main.js",
  	a: "./script/a.js"
  },
  output: {
    //path: path: path.resolve(__dirname, "./dist/js"),
    //filename: "./[name]-[chunkhash:5].js",

  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name]-[chunkhash:5].js"
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  //template: path.resolve(__dirname, "./src/html/index.html")
  	  template: "html/index.html",
      filename: "html/index.html",
      inject: false
  	})
  ]
};