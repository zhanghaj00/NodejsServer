/**
 * Created by James on 2016/1/30 0030.
 */

var express = require('express');
var router = express.Router();
var passport = require('./../tools/passportS');
var bbsController = require('./../controller/userController');

router.get('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.json({'result':true,'code':'success login'});
});
router.get('/logout',
    function(req, res){
        req.logout();
        res.redirect('/');
    });

router.get('/signup',function(req,res){

    bbsController.doSaveUser(req.query,function(err){
        if(err){
            res.json({'result':false,'code':"insert error "});
        }else{
            res.json({'result':true,'code':'insert success'});
        }
    });
});

router.get('/checklogin',require('connect-ensure-login').ensureLoggedIn(),function(req,res){
    console.log('check login......');
    res.json({'result':true,'code':req.user});
});
module.exports = router;