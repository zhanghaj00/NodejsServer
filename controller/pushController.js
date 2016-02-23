/**
 * Created by James on 2016/2/16 0016.
 */

var socketConnection = require('./../socket/pushManager.js').socketConnection;
var bbsTitleDao = require('./../model/bbstitle.js');
var bbsPostDao = require('./../model/bbsPost.js');

exports.pushToUserWithMessage = function (req,message,user) {

    var titleId = req.body.titleId;

    var user =  bbsTitleDao.queryByTitle(titleId,function(err,obj){

        if(!socketConnection.hasOwnProperty(obj.createId)) {
            var socket = socketConnection[obj.createId];
            socket.emit('message',{message:message,name:user.name});
        }
    })



};
