var express = require("express");
var path = require("path");   //路径模块
var serveStatic = require("serve-static");    //
var bodyParser = require("body-parser");    //处理表单数据模块
var _ = require("underscore");    //函数工具模块
var mongoose = require("mongoose");
var Movie = require("./models/movie");
var port = process.env.PORT || 3000;
var app = express();

mongoose.Promise = global.Promise;    //DeprecationWarning: Mongoose: mpromise 解决方案
mongoose.connect("mongodb://localhost/imooc", {useMongoClient: true});

app.set("views", "./views/pages");	//设置视图根目录
app.set("view engine", "jade");		//设置视图模版引擎
app.use(bodyParser.urlencoded({extended: true}));
app.use(serveStatic("public"));    //处理静态资源路径
app.locals.moment = require("moment");    //引入时间格式化模块、生命周期为整个app服务
app.listen(port);

console.log("OK: " + port);

//index page
app.get("/", function(req, res) {
  Movie.fetch(function(err, movies) {
    if(err){
      console.log(err);
    }
    
    res.render("index", {
      title: "首页",
      movies: movies
    });
  });
});

//detail page
app.get("/movie/:id", function(req, res) {
  var id = req.params.id;

  Movie.findById(id, function(err, movie) {
    if(err){
      console.log(err);
    }
    
    res.render("detail", {
      title: movie.title + " 详情页",
      movie: movie
    });
  });
});

//admin page
app.get("/admin/movie", function(req, res) {
  res.render("admin", {
  	title: "后台录入页",
  	movie: {
  		title: "",
  		doctor: "",
  		country: "",
  		year: "",
  		poster: "",
  		flash: "",
  		summary: "",
  		language: ""
  	}
  });
});

//admin update movie
app.get("/admin/update/:id", function(req, res) {
  var id = req.params.id;

  if(id){
    Movie.findById(id, function(err, movie) {
      res.render("admin", {
        title: "后台更新页",
        movie: movie
      });
    });
  }

});

//admin post movie
app.post("/admin/movie/new", function(req, res) {
  var id = req.body.movie._id;
  var movieObj = req.body.movie;
  var _movie;

  if(id){
    Movie.findById(id, function(err, movie){
      if(err){
        console.log(err);
      }
        
      _movie = _.extend(movie, movieObj);
      _movie.save(function(err, movie) {
        if(err){
          console.log(err);
        }
        
        res.redirect("/movie/" + movie._id);
      });
    });
  }
  else{
    _movie = new Movie({
      title: movieObj.title,
      doctor: movieObj.doctor,
      country: movieObj.country,
      year: movieObj.year,
      poster: movieObj.poster,
      flash: movieObj.flash,
      summary: movieObj.summary,
      language: movieObj.language
    });

    _movie.save(function(err, movie) {
      if(err){
        console.log(err);
      }
      
      res.redirect("/movie/" + movie._id);
    });
  }
});


//list page
app.get("/admin/list", function(req, res) {
  Movie.fetch(function(err, movies) {
    if(err){
      console.log(err);
    }

    res.render("list", {
      title: "列表页",
      movies: movies
    });
  });
});

//list delete movie
app.delete("/admin/list", function(req, res) {
  var id = req.query.id;

  if(id){
    Movie.remove({_id: id}, function(err, movie) {
      if(err){
        console.log(err);
      }
      else{
        res.json({success: 1});
      }
    });

  }
});