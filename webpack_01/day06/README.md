## day06 笔记

* **重建项目目录：**
> |dist &emsp;&emsp;//生产目录  
> |src &emsp;&emsp;//开发目录  
> &emsp;&emsp;|components &emsp;&emsp;//组件目录  
> &emsp;&emsp;|app.js &emsp;&emsp;//项目入口文件  
> |index.html &emsp;&emsp;//主视图  

* **js中引入其他文件：**
```js
// app.js
import layer from "./components/layer/layer.js";
```

* **自定义一个组件**
```html
<!-- layer/layer.html -->
<div class="layer">
	<div>this is a layer</div>
</div>
```

```css
/* layer/layer.less */
.layer {
  width: 600px;
  height: 200px;
  background-color: green;

  > div {
	width: 400px;
	height: 100px;
	background-color: red;
  }
}
```

```js
// layer/layer.js
import tpl from "./layer.html";		//引入html

function layer () {
  return {
  	name: "layer",
  	tpl: tpl
  }
}

export default layer;		//暴露layer组件
```

* **暴露组件的注：**  
&emsp;export暴露的代码，用import引入时需要要用 {} 包括。import { layer } from "./components/layer/layer.js"  
&emsp;export default暴露的代码，用import引入时要可以不用 {} 包括。import layer from "./components/layer/layer.js"

