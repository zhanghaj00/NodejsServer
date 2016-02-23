/**
 * Created by James on 2016/1/29 0029.
 */

var bbsTitleDao = require('./../model/bbstitle.js');
var bbsPostDao = require('./../model/bbsPost.js');
exports.dobbsTitleSave = function(req,res){
    var json = req.body;
    console.log('save bbs '+json);


    bbsTitleDao.save(json,function(err,commont){
        if(err){
          res.json({'result':false,'code':"insert error "});
        }else{
            res.json({'result':true,'code':'insert success'});
        }
    })


};
exports.dobbsTitleQuery = function(req,res){
    console.log('query+'+req.params.title);
    bbsTitleDao.queryByid(req.params.title,function(err, obj){
        res.json({'result':true,'code':obj});
    });

};
exports.dobbsTitleQueryByType = function(req,res){
    console.log("query by type:"+req.param.type);
    bbsTitleDao.queryByType(req.param.type,function(err,obj){
        res.json({'code':true,'result':obj});
    })
};

exports.dobbsTitleQueryByTypeByPage = function(req,res){
    var obj = req.query;
    bbsTitleDao.queryByTypeByPage(obj,function(err,obj1){
        res.json({'code':true,'result':obj1})
    })

}
exports.dobbsPostByTitleId = function(req,res){
    console.log('query post by id'+req.param.titleId);
    bbsPostDao.queryByTitleId(req.params.titleId,function(err,obj){
        res.json({'code':true,result:obj});
    })
}

exports.dobbsPostSave = function(req,res){
    var json = req.body;
    bbsPostDao.save(json,function(err,obj){
        if(err){
            res.json({'result':false,'code':"insert error "});
        }else{
            res.json({'result':true,'code':'insert success'});
        }
    })
}
