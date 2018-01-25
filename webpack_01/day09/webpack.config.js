var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./app.js",
  output: {
  	path: path.resolve(__dirname, "./dist"),
  	filename: "js/[name]-bundle.js"
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
  	  	exclude: /node_modules/,
  	  	include: path.resolve(__dirname, "./src")
  	  },
  	  {
  	  	test: /\.css$/,
  	  	use: [
  	  	  "style-loader",
  	  	  "css-loader",
  	  	  {
  	  	  	loader: "postcss-loader",
  	  	  	options: {
  	  	  	  plugins: [require("postcss-import"), require("autoprefixer")],
  	  	  	  browser: ["last 5 versions"]
  	  	  	}
  	  	  }
  	  	]
  	  },
  	  {
  	  	test: /\.less$/,
  	  	use: [
  	  	  "style-loader",
  	  	  "css-loader",
  	  	  {
  	  	  	loader: "postcss-loader",
  	  	  	options: {
  	  	  	  plugins: [require("postcss-import"), require("autoprefixer")({ browsers: ["last 5 versions"] })]
  	  	  	}
  	  	  },
  	  	  "less-loader"
  	  	]
  	  },
  	  {
  	  	test: /\.scss$/,
  	  	use: [
  	  	  "style-loader",
  	  	  "css-loader",
  	  	  {
  	  	  	loader: "postcss-loader",
  	  	  	options: {
  	  	  	  plugins: [require("postcss-import"), require("autoprefixer")({ browsers: ["last 5 versions"] })]
  	  	  	}
  	  	  },
  	  	  "sass-loader"
  	  	]
  	  }
  	]
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  filename: "index.html",
  	  template: "../index.html"
  	})
  ]
};