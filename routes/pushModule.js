var push = require('./../bin/www').push;
var socketConnection = {};

push.on('connection',function(socket){

    console.log('connection.......');


    socket.on('login',function(obj){
        socketConnection[obj.userid] = socket;

        //do something with login and connection
    });


});

exports.socketConnection = socketConnection;