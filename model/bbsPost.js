/**
 * Created by James on 2016/1/30 0030.
 */
var mongo = require('./mongodb')

var Schema = mongo.mongoose.Schema;

var bbsPostSchema = new Schema({
    titleId:String, //回复的哪一个title
    createId:String, //创建这个消息的回复
    createTime:{type:Date,default:new Date()},
    content:String, //回复的内容
    postId:String  //回复的是哪一个回复
});

var bbsPost = mongo.mongoose.model("bbsPost",bbsPostSchema,'bbsPost');

var bbsPostDao = function(){};

bbsPostDao.prototype.save = function(obj,callback){
    var instance = new bbsPost(obj);
    instance.save(function(err){
        console.log('bbspost save fail....');
    })
};
bbsPostDao.prototype.queryByTitleId =function(obj,callback){

    bbsPost.find({'titleId':obj},function(err,obj){
        callback(err,obj);
    })
}
module.exports = new bbsPostDao();