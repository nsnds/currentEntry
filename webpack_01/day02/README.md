## day02 笔记
* context：指定运行脚本的上下文环境，entry、plugin会相对于此目录查找。默认为当前目录，<font color="red">路径需为绝对路径</font>。

* entry：打包的入口文件配置，<font color="red">entry的路径可为相对路径</font>。
```javascript
entry: "./src/script/main.js"   //
```

* entry的值可以是string、array类型、object类型。
> arr类型场景：将两个平行的文件打包在一起。  
> obj类型场景：多页面应用。

* output：打包完成的文件配置，<font color="red">output的路径需为绝对路径</font>。
```javascript
ouput: {
  filename: "bundle.js",		//与指定相对目录同级时，应省略./
  								//因为在html引入的js会出现.././这种路径，虽然不会报错。
  								//entry不能省略./否则报错，output和plugins的filename是可以省略./的

  //第一种写法
  path: path.resolve(__dirname, "./dist/js")
  //第二种写法
  path: __dirname + "/dist/js"

  publicPath: "http://cdn.com/js"		//在html中引入的路径会被替换成"http://cdn.com/"开头的地址
										//设置上线时的路径
}

```

* output.filename有3种占位符：[name]、[hash]、[chunkhash]
> [name]：entry对象的中的key。  
> [hash]：这次打包的hash，打包结果信息中的Hash值。  
> [chunkshash]：每个chunk的hash值，是打包后文件的hash和md5值，可当作文件版本号。

* 使用配置文件webpack.config.js，命令行中可直接使用webpack即可打包。

* webpack配置文件默认是webpack.config.js，若指定webpack.dev.config.js，命令行中webpack应换为webpack -- config webpack.dev.config.js

* webpack可配合npm使用，在package.json中的script中配置webpack命令，命令行中输入npm run webpack打包
```javascript
//package.json
"script": {
  "webpack": "webpack --config webpack.config.js "
}
//命令行
npm run webpack
```

