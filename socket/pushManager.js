/**
 * Created by James on 2016/2/16 0016.
 */
var socketConnection = {};
exports.on = function(push){
    push.on('connection',function(socket){

        console.log('connection an user');
        socket.on('login',function(obj){
            socketConnection[obj.userid] = socket;
            //do something with login and connection
        });
    });
};
exports.socketConnection = socketConnection;
