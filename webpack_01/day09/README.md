## day09 笔记

* **处理less：**
    * cnpm i -D less less-loader
```scss
/* src/components/layer/layer.less */
html, body {
  margin: 0;
  padding: 0;
}

.flex_2 {
  display: flex;
  
  > div {
    background: #red;
  }
}
```

```js
// src/components/layer/layer.js
import "./layer.less";

// webpack.config.js
rules: [
  {
  	test: /\.less$/,
  	use: [
	  "style-loader",
	  "css-loader",
	  {
	  	loader: "postcss-loader",
	  	options: {
	  	  plugins: [require("postcss-import"), require("autoprefixer")({ browsers: ["last 5 versions"] })]
	  	  //当autoprefixer模块中的参数时，是browsers
	  	}
	  },
	  "less-loader"
  	]
  }
]
```

* **处理sass：**
	* cnpm i -D node-sass sass-loader  
> node-sass：sass-loader处理sass文件的依赖。
```scss
/* /src/components/layer/layer.scss */
.flex {
	width: 400px;
	height: 200px;
	display: flex;
}
```

```js
// src/components/layer/layer.js
import "layer.scss";

// webpack.config.js
reles: [
  {
  	test: /\.scss$/,
  	use: [
	  "style-loader",
	  "css-loader",
	  {
	  	loader: "postcss-loader",
	  	options: {
	  	  plugins: [require("postcss-import"), require("autoprefixer")],
	  	  browser: ["last 5 versions"] 		//与plugins同级时，是browser
	  	}
	  },
	  "sass-loader"
  	]
  }
]
```
* **注：**
> 在webpack3.x中，autoprefixer插件会默认给css、less、sass、import进来的样式加前缀。可以不用在css-loader中设置importLoaders参数来了。

