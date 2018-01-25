## day07 笔记

* **cnpm i -D babel-loader babel-core**
> babel-loader：webpack转化js的loader
> babel-core：转化js的包

* **cnpm i -D babel-preset-env**
> 根据配置的目标运行环境（environment）自动启用需要的 babel 插件，会根据配置的 env 只编译那些还不支持的特性。

* **使用loader**
```js
//第一种写法：
module: {
  //loaders：loader列表，里面每一项都是一条规则
  loaders: [
    {
      test: /\.js$/,    //匹配js文件
      loader: "babel-loader",
      query: { presets: ["env"] }     //向loader传参，配置loader
    }
  ]
}

//第二种写法：
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: "babel-loader",
      options: { presets: ["env"] }
    }
  ]
}

//第三种写法：
module: {
  loaders: [
    {
      test: /\.js$/,
      loaders: [
        {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      ]
    }
  ]
}

//第四种写法：
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      ]
    }
  ]
}
```

* **对于配置babel还能在package.json文件内配置**
```json
{
  "babel": {
    "presets": ["env"]
  }
}
```

* **exclude、include**
```js
reles: [
  {
    test: /\.js$/,
    use: [
      {
        loader: "babel-loader",
        options: { presets: ["env"] }
      }
    ],
    exclude: /node_modules/,     //不需要使用loader处理的文件夹
    include: path.resolve(__dirname, "./src")   //需要使用loader处理的文件夹
  }
]

```

> <font color="red">exclude、include需是绝对路径</font>  
> <font color="red">exclude、include并不受context影响</font>