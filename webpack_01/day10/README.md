## day10 笔记

* **cnpm i -D html-loader**
> 把html文件转化为字符串的loader

```html
<!-- index.html -->
<body>
	<div id="app"></div>
</body>

```

```js
// layer.js
import tpl from "./layer.html";

function layer () {
  return {
  	name: "layer",
  	tpl: tpl
  }
}

// app.js
import Layer from "./components/layer/layer.js";

const App = function (){
  var dom = docunment.querySelector("#app");
  dom.innerHTML = new Layer().tpl;
}

// webpack.config.js
rules: [
  ...
  {
	test: /\.html$/,
	use: "html-loader"
  }
]
```

* **使用ejs作为模版：**
> cnpm i -D ejs-loader

```html
<!-- layer.ejs -->
<div class="layer">
	<div>this is <%= name %> !</div>
	<% for (var i = 0; i < arr.length; i++) { %>
		<%= arr[i] %>
	<% } %>
</div>
```

```js
// layer.js
import tpl from "./layer.ejs";

// app.js
dom.innerHTML = layer.tpl({
  name: "QM",
  arr: ["l", "s", "s"]
});
```