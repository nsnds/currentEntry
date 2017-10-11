# 慕课网nodeJS+mongodb建站1期

### 技术栈
* express (node框架)
* underscore (函数工具库)
* mongoose (node操作mongodb的驱动)
* moment (时间处理插件)

### 参考
[http://www.imooc.com/learn/75](http://www.imooc.com/learn/75)

### 坑
* 视频中express版本太低，在4.0中serve-static、body-parser都需要手动安装与引入。
* 视频中mongodb版本太低，连接数据库时应该是mongoose.connect("mongodb://localhost/imooc", {useMongoClient: true})
* mongodb连接后报：DeprecationWarning: Mongoose: mpromise，需要在连接前加上mongoose.Promise = global.Promise