## 版本
* webpack版本: 3.10.0
* npm版本: 5.0.3
* node版本: 8.1.3
## 说明
初始化文件夹: **npm init**

安装webpack: **cnpm i -D webpack**

打包hello.js: **webpack hello.js hello.bundle.js**

打包style.css: 需要先下载style-loader和css-loader  
&emsp;1. **cnpm i -D style-loader css-loader**  
&emsp;2. css-loader是让webpack能处理css文件的loader，style-loader是让处理后的代码能插入到html中的loader  
&emsp;3.未使用配置文件打包要在css引入的时候加上loader，如：require("css-loader!./style.css")。或者在命令中指定loader，如：  
&emsp;&emsp;webapck hello.js hello.bundle.js --module-bind "css-loader=style-loader!css-loader"  
&emsp;4.**webpack hello.js hello.bundle.js**

热更新：**webpack hello.js hello.bundle.js --watch**

显示打包进度：**webpack hello.js hello.bundle.js --progress**

显示打包的模块：**webpack hello.js hello.bundle.js --display-modules**

显示使用模块的原因：**webapck hello.js hello.bundle.js --display-reasons**

命令行打包过程字体显示颜色： **webpack --colors**
