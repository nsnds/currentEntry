var path = require("path");

// module.exports = {
//   entry: path.resolve(__dirname, "./src/script/main.js"),
//   //entry: "./src/script/main.js",
//   output: {
//   	path: path.resolve(__dirname, "./dist/js"),
//   	filename: "bundle.js"
//   }
// }

// module.exports = {
//   entry: [path._r("./src/script/main.js"), path._r("./src/script/a.js")],
//   output: {
//   	path: path._r("./dist/js"),
//   	filename: "bundle.js"
//   }
// };

module.exports = {
  entry: {
  	main: path.resolve(__dirname, "./src/script/main.js"),
  	a: path.resolve(__dirname, "./src/script/a.js")
  },
  output: {
  	path: path.resolve(__dirname, "./dist/js"),
  	filename: "[name]-[hash].js"
  }
};