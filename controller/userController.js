/**
 * Created by James on 2016/2/22 0022.
 */

var userDao = require('./../model/user.js');

exports.doFindUserByInput = function(queryCode,callback){
    userDao.findByEmail(queryCode,function(err,obj){
        if( obj == undefined || obj == null || obj ==''){
            userDao.findByPhone(queryCode,function(err,obj){
                if(obj == undefined || obj == null || obj ==''){
                    userDao.findByUserName(queryCode,function(err,obj){
                        if(obj == undefined || obj == null || obj ==''){
                            callback(err);
                        }else{
                            console.log('get user:'+obj.password);
                            callback(err,obj);
                        }
                    });
                }else{
                    callback(err,obj);
                }
            });
        }else{
            callback(err,obj);
        }
    });
}
exports.doSaveUser = function(user,callback){
    userDao.save(user,function(err){
        callback(err);
    })

}

exports.doFindUserById = function(id,callback){
    userDao.findById(id,function(err,obj){
        callback(err,obj);
    })
}