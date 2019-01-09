var express=require('express');
var app = express();
var router = express.Router();

router.get('/choice'),function(req,res){
    res.render('formchoice',randomObject);
    console.log('FORM CHOICE LOADED')
}

router.post('/new',function(req,res){
    //var userInfo = req.body;
})
module.exports=router;