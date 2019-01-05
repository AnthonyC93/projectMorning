//import express
//import burger.js
var todos=require('../models/todos');
var express=require('express');
var app=express();
var router = express.Router();

router.get('/',function(req,res){
    todos.all(function(data){
        var whatever={
            arbitraryName:data
        }
        res.render('index',whatever);
    })
})

router.post('/',function(req,res){
    console.log(req.body);
    // todos.add(req.body.burgerNameEntered);
    res.redirect('/');
})

router.put('/:id',function(req,res){
    todos.update(1,req.params.id);
})

module.exports=router;