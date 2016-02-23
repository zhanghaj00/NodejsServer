/**
 * Created by James on 2016/1/30 0030.
 */

var express = require('express');
var router = express.Router();
var bbsController = require('./../controller/bbsController');

var pushController = require('./../controller/pushController')
router.post('/publishBbs',function(req,res){
    console.log('in this function....')
    bbsController.dobbsTitleSave(req,res);

})

router.get('/getBbsByTitle/:title',function(req,res){
    console.log('in this function....')
    bbsController.dobbsTitleQuery(req,res);

});

router.get('/getBbsByType/:type',function(req,res){
    bbsController.dobbsTitleQueryByType(req,res);
});


router.get('/dobbsTitleQueryByTypeByPage',function(req,res){
    bbsController.dobbsTitleQueryByTypeByPage(req,res);
});

router.post('/postBbs',function(req,res){
    console.log('postBbs');
    bbsController.dobbsPostSave(req,res);
    pushController.pushToUserWithMessage(req,req.body.content,req.body.createId);

});
router.get('/getBbsPostByTitleId/:titleId',function(req,res){
    bbsController.dobbsPostByTitleId(req,res);
});
module.exports = router;