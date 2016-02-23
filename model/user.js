/**
 * Created by James on 2016/2/22 0022.
 */
var mongo = require('./mongodb')

var Schema = mongo.mongoose.Schema;

var userSchame = new Schema({
    username:String, //用户名
    password:String, //密码
    createTime:{type:Date,default:new Date()},
    email:String, //邮箱
    phone:String,  //电话
    creditId:String,  //身份证
    sex:String //性别
});

var user = mongo.mongoose.model("user",userSchame,'user');


var userDao = function(){};

userDao.prototype.findByUserName = function(obj,callback){
    console.log('find by username:'+obj);
    user.findOne({username:obj},function(err,obj){
        callback(err,obj);
    });
};
userDao.prototype.findByPhone = function(obj,callback){
    console.log('find by phone:'+obj);
    user.findOne({phone:obj},function(err,obj){
        callback(err,obj);
    })
}
userDao.prototype.findByEmail = function(obj,callback){
    console.log('find by Email:'+obj);
    user.findOne({email:obj},function(err,obj){
        callback(err,obj);
    });
};

userDao.prototype.save = function(obj,callback){
    console.log('getUser:'+obj.username);
    var userinstance = new user(obj);
    userinstance.save(function(err){
        callback(err);
    });
};
userDao.prototype.findById = function(obj,callback){

    user.findById(obj,function(err,obj){
        callback(err,obj);
    })
}
module.exports = new userDao();