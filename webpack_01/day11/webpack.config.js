var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

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
      	test: /\.(css|less)$/,
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
      	test: /\.tpl$/,
      	use: "html-loader"
      },
      // {
      // 	test: /\.(png|jpg|gif|svg)$/,
      // 	use: [
      //     {
      //     	loader: "file-loader",
      //     	options: {
      //         outputPath: "image/",
      //     	  name: "[name].[ext]"
      //     	}
      //     }
      // 	]
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "image/",
              name: "[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
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