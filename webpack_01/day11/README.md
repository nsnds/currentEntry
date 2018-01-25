## day11 笔记

* **处理css中的图片：**
	* cnpm i -D file-loader

```css
/* layer.less */
.layer {
  ...
  > div {
  	background: url(../../assets/djt01.gif) no-repeat 100px 100px;
  }
}
```

```js
// webpack.config.js
rules: [
  ...
  {
  	test: /\.(png|jpg|gif|svg)$/i,		//i：不区分大小写
  	use: [
  	  loader: "file-loader",
  	  options: {
  	  	outputPath: "image/",		//指定打包后的路径
  	  	name: "[name].[ext]"		//指定打包后的文件名
  	  }
  }
]
```

* **处理组件模版中的图片：**

```html
<!-- layer.tpl -->
<div class="layer">
	<img src="../../assets/xyn.jpg">
	<div></div>
</div>
```

* **处理根目录的html文件中的图片：**

```html
<!-- index.html -->
<img src="${ require('./src/assets/xyn.jpg') }">		<!-- 必须是./否则报错 -->
<div id="app"></div>
```

> 根目录下的index.html中的img标签使用相对路径打包后不会替换成打包后的图片地址，需要使用${ require('相对路径') }

* **使用url-loader：**

> url-loader可以处理文件或图片。url-loader可以指定limit参数，当文件大小<font color="red">大于</font>设定的limit参数时，url-loader就会直接丢给file-loader处理；当文件大小<font color="red">小于</font>limit参数时，url-loader会把文件或图片转化为base64的编码。

> 使用url-loader可以不用安装file-loader

* **使用image-webpack-loader：**

> 压缩图片的loader，需要配置具体压缩图片的参数。

```js
cnpm i -D image-webpac-loader

// webapck.config.js
rules: [
  ...
  {
    test: /\.(jpg|png|svg|gif)$/i,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192,
          outputPath: "image/",        //相对于output的相对路径
          name: "[name].[ext]"
        }
      },
      {
        loader: "image-webpack-loader",
        options: {
          gifsicle: { interlaced: false },    //gif文件压缩优化配置
          optipng: { optimizationLevel: 6 },
          pngquant: { quality: '65-90', speed: 4 },
          mozjpeg: { progressive: true, quality: 65 },    //jpeg文件压缩优化配置
          webp: { quality: 75 }     //webp文件压缩优化配置
        }
      }
    ]
  }
]

```