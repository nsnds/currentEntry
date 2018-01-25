## day05 笔记

* **关于output.filename的注：**
```javascript
output: {
  path: path.resolve(__dirname, "./dist"),
  filename: "./js/[name].js"		//这种写法html中会输出.././js/main.js
  									//写成js/[name].js输出是正常形式../js/main.js
}
```

* **生成多个html**
```javascript
entry: {
  main: "./js/main.js",
  a: "./js/a.js",
  b: "./js/b.js",
  c: "./js/c.js"
},
plugins: [
  new htmlWebpackPlugin({
	template: "./html/a.html",
	filename: "./html/a.html",
	chunks: ["main", "a"] 			//载入需要的chunk
  }),
  new htmlWebpackPlugin({
	template: "./html/b.html",
	filename: "./html/b.html",
	chunks: ["main", "b"]
  }),
  new htmlWebpackPlugin({
	template: "./html/c.html",
	filename: "./html/c.html",
	chunks: ["main", "c"]
  })
]
```

* **指定不载入的chunk：**
```javascript
//配置c.html
new htmlWebpackPlugin({
  ...
  excludeChunks: ["a", "b"]		//a.js、b.js不载入c.html
})
```

* **chunk以内联形式引入html中：**
```javascript
new htmlWebpackPlugin({
  ...
  filename: "./html/a.html",
  inject: false,
  excludeChunks: ["b", "c"]
})

```

```html
<!-- src/html/index.html -->
<head>
    <script>
        <%= compilation.assets[htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
    </script>
</head>
<body>
    <% for (var k in htmlWebpackPlugin.files.chunks) { %>
        <% if (k != "main") { %>
            <script src="<%= htmlWebpackPlugin.files.chunks[k].entry %>"></script>
        <% } %>
    <% { %>
</body>
```

> htmlWebpackPlugin.files.chunks.main.entry = "http://cdn.com/js/main.js"  
> htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length) = "js/main.js"  
> compilation.assets["js/main.js"].source()：获取dist/js/main.js中的内容

