/**
 * Created by James on 2016/2/22 0022.
 */
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var userController = require('./../controller/userController');

passport.use(new Strategy(
    function(username, password, cb) {
        console.log('strategy: username:'+username+' password:'+password);
        userController.doFindUserByInput(username, function(err, user) {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false); }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
}));

passport.serializeUser(function(user, cb) {
    console.log('check serializeUser:'+user._id);
    cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
    console.log('check deserializeUser:'+id);
    userController.doFindUserById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});
module.exports = passport;