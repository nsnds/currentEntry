var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema({
  doctor: String,
  title: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

MovieSchema.pre("save", function(next) {
  //是否为新增数据
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }
  else{
  	this.meta.updateAt = Date.now();
  }
  next();
});

MovieSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})		//查询全部数据
      .sort("meta.updateAt")		//按更新时间排序
      .exec(cb);		//执行回调
  },
  findById: function(id, cb) {
  	return this
  	  .findOne({_id: id})
  	  .exec(cb);
  }
}

module.exports = MovieSchema;