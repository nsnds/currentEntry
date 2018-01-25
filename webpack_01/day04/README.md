## day04 笔记

* **html-webpack-plugin支持类似js的模版语言，官方支持ejs类型的语法。**
```html
<!-- src/html/index.html -->
<title><%= htmlWebpackPlugin.options.title %></title>
...
<body>
	<%= htmlWebpackPlugin.option.date %>
</body>
```

> <%<font color="red">=</font> 取值 %>  
  <% 运行的js代码 %>

```javascript
new htmlWebpackPlugin({
  ...
  title: "webpack is good!",
  date: new Date()
})
```

> htmlWebpackPlugin实例对象里的属性都能在html中通过htmlWebpackPlugin.option.属性 访问。

* **htmlWebpackPlugin中有两个属性：files、options**
```javascript
{
  files: {
  	publicPath: "../",		//context的路径，这里的是相对于生成的html的路径
  	chunks: {},		//这里的chunks是指当前html文件需要的chunk的详细信息
  					//webpack里的chunk是指打包完成的文件
  },
  options: {
    chunks: [],		//这里的chunks是指定当前html文件需要的chunk文件
    date: "2018-1-11"		//自定义属性
  }
}
```

* **根据需求把chunk放在html中的不同位置：**
```javascript
new htmlWebpackPlugin({
  ...
  inject: false
})
```

```html
<!-- src/html/index.html -->
<head>
	<script src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script>
</head>
<body>
	<script src="<%= htmlWebpackPlugin.files.chunks.a.entry %>"></script>
</body>
```
> inject需要设置为false，否则在指定的位置会再次引入chunk  
> files.chunks.main.entry是指打包好文件的引用路径，和webpack.config.js中的entry并没有关系。

* **为chunk设置上线时的路径：**
```javascript
output: {
  publicPath: "http://cdn.com/"		//在html中引入的路径会被替换成"http://cdn.com/"开头的地址
										//设置上线时的路径
}
```

```html
<!-- dist/html/index.html -->
<head>
	<script src="http://cdn.com/js/main.js"></script>
</head>
<body>
	<script src="http://cdn.com/js/a.js"></script>
</body>
```

* **上线的html文件配置（删除注释、删除空格）**
```javascript
new htmlWebpackPlugin({
  minify: {
    removeComments: true,		//删除注释
	collapseWhitespace: true		//删除空格
  }
})

```