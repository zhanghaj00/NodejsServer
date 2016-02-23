/**
 * Created by James on 2016/2/22 0022.
 */
var mongo = require('./mongodb')

var Schema = mongo.mongoose.Schema;

var userSchame = new Schema({
    username:String, //�û���
    password:String, //����
    createTime:{type:Date,default:new Date()},
    email:String, //����
    phone:String,  //�绰
    creditId:String,  //���֤
    sex:String //�Ա�
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