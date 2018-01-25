## day03 笔记

* **html-webpack-plugin：webpack识别html并打包html文件的插件。**
```javascript
cnpm i -D html-webpack-plugin
```

* **plugin：webpack中的插件配置项，是一个数组。**
```javascript
var htmlWebpackPlugin = require("html-webpack-plugin");

plugin: [
  new htmlWebpackPlugin({
  	template: "index.html"		//为生成的html设置模版文件，可为相对路径。
  })
]
```

* **指定占位符的长度：**
```javascript
filename: "./[name:6]-[chunkhash:5].js"		//语法：[占位符:长度]
```

* **指定生成的html的文件夹并指定文件名：**
```javascript
output: {
  path: path.resolve(__dirname, "./dist"),
  filename: "./js/[name]-[chunkhash:5].js"
},
plugin: [
  new htmlWebpackPlugin({
    template: "./html/index.html",		//模版是相对于context的路径
    filename: "./html/index-[chunkhash].html"		//输出是相对于output.path
  })
]

```

* **指定entry中js在html内插入的位置：**
```javascript
new htmlWebpackPlugin({
  inject: "head"		//值可以是布尔值、和相应标签的字符串。默认是在body标签内
})
```

