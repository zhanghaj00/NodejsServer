/**
 * Created by James on 2016/1/29 0029.
 */
var mongodb = require('./mongodb');

var Schema = mongodb.mongoose.Schema;

var bbsTitleSchema = new Schema({
        title:String,
        createTime:{type :Date,default:new Date()},
        createId:String, //创建用户的id
        content:String,
        type: Number, // 分为租房 社区 1 衣食住行 wifi
        view: Number,
        post: Number
});

var bbsTitle = mongodb.mongoose.model("bbsTitle",bbsTitleSchema,"bbsTitle");


var bbsTitleDao = function(){};


bbsTitleDao.prototype.save = function(obj,callback){
    var instance = new bbsTitle(obj);
    instance.save(function(err){
        callback(err);
    });
};
bbsTitleDao.prototype.queryByTitle = function(obj,callback){
    console.log('get param:'+obj)
    bbsTitle.findOne({title:obj}, function(err, obj){
        console.log('get result:'+obj)
        callback(err, obj);
    });
};

bbsTitleDao.prototype.queryById = function(obj,callback){
    console.log('query by id:'+id);

    bbsTitle.findById(obj,function(err,found){
        callback(err,found);
    });
};
bbsTitleDao.prototype.queryByType = function(obj,callback){
    console.log('get param:'+obj);
    bbsTitle.find({type:obj},function(err,obj){
        callback(err,obj);
    })
};

/****************************
 get paged list
 ************************/
bbsTitleDao.prototype.queryByTypeByPage = function(obj,callback) {
    var page = obj.page;
    var rows = obj.rows;
    var type = obj.type;
    console.log('query:'+page +';'+rows+';'+type);
    var query = bbsTitle.find({});
    query.skip((page - 1) * rows);
    query.limit(rows);
    query.where('type', type);
    //计算分页数据
    query.exec(function (err, rs) {
        if (err) {
            callback(err);
        } else {
            //计算数据总数
            bbsTitle.find(function (err, result) {
                if(err){
                    callback(err);
                }else{
                  /*  jsonArray = {rows: rs, total: result.length};
                    res.json(jsonArray); */
                    callback(err,rs);
                }

            });

        }
    });
}
module.exports = new bbsTitleDao();