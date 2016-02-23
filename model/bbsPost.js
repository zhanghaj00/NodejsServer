/**
 * Created by James on 2016/1/30 0030.
 */
var mongo = require('./mongodb')

var Schema = mongo.mongoose.Schema;

var bbsPostSchema = new Schema({
    titleId:String, //�ظ�����һ��title
    createId:String, //���������Ϣ�Ļظ�
    createTime:{type:Date,default:new Date()},
    content:String, //�ظ�������
    postId:String  //�ظ�������һ���ظ�
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