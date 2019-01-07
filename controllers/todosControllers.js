//import express
//import todos.js

// var todos=require('../models/todos');
var express=require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    // todos.all(function(data){
    //     var whatever={
    //         arbitraryName:data
    //     }

        var whatever ={
            motivation:"you're the best human ever",
            todos:['buy milk','walk dog']
        }
        res.render('index',whatever);
    // })
})

// router.post('/',function(req,res){
//     console.log(req.body);
//     res.redirect('/');
// })

// router.put('/:id',function(req,res){
//     todos.update(1,req.params.id);
// })

module.exports=router;