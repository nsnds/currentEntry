## day08 笔记

* **调整目录结构**
> |src  
> &emsp;&emsp;|css		//通用css文件夹

* **引入css文件：**
```js
// src/app.js
import "./css/common.css";

// webpack.config.js
rules: [
  {
  	test: /\.css$/,
  	use: [
  		"style-loader",
  		"css-loader"
  	]
  }
]
```

* **postcss-loader的使用：**
	* postcss-loader：css的后处理器，可以和postcss-loader的插件(plugin)配合添加前缀等工作

* **给css添加前缀：**
```css
/* src/css/common.css */
.flex-div {
	display: flex;
}
```

```js
// 下载postcss-loader的插件autoprefixer
// cnpm i -D autoprefixer

// webpack.config.js
rules: [
  {
  	test: /\.css$/,
  	use: [
  	  "style-loader",
  	  {
        loader: "css-loader",
        options: { importLoaders: 1 }     //css-loader之前还有几个loader
      },
	   {
	  	 loader: "post-loader",
	  	 options: {
	  	   plugins: [require("autoprefixer")({ browsers: ["last 5 versions"] })],		//以最新的5个版本的浏览器作为参考进行处理
	  	 }
	   }
  	]
  }
]
```

* **处理css文件中引入的css文件：**
> cnpm i -D postcss-import&emsp;&emsp;&emsp;//postcss-loader的插件，处理@import的css能够添加前缀

```css
/* src/css/flex.css */
.flex-div {
	display: flex;
}

/* src/css/common.css */
@import "./flex.css";
```

```js
//第一种写法：
rules: [
  ...
  {
  	loader: "postcss-loader",
  	options: {
	  plugins: [require("postcss-import"), require("autoprefixer")({ browsers:["last 5 versions"] })]      //应注意顺序，autoprefixer在前的话@import的css前缀不会添加
  	}
  }
]
```
