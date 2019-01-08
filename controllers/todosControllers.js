//import express
//import todos.js
var todos=require('../models/todos');
var users = require('../models/users');
var express=require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){

    if(localStorage.getItem('userMorningNumber')===null){
        console.log("there is no user MorningNumber here");
        res.render('index',whatever);
    }else{
        console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
    }

})

router.get('/:userNumber',function(req,res){
    let userNumber = req.params.userNumber
    console.log('userNumber = '+userNumber)
    users.getAllUserInfo(userNumber,function(userData){
        todos.getAllTasks(userNumber,function(userTasks){
            console.log(userData);
            console.log(userTasks);
            arbitraryName={
                homeLL:userData[0].homeLL,
                workLL:userData[0].workLL,
                todos:userTasks,
                homeCity:userData[0].homeCity,
                workCity:userData[0].workCity,
                userNumber:userData[0].userNumber
            }
            console.log(arbitraryName);
            res.render('index',arbitraryName);
        })   
    }) 
})

//
router.post('/',function(req,res){
    console.log(req.body);
    res.redirect('/');
    
})

// $.ajax('/'+this.id, {
//     type: "PUT"
// }).then(function(){
//     console.log('burger eaten!');
//     location.reload();
// })

router.put('/:userNumber/:id',function(req,res){
    todos.markAsDone(req.params.userNumber,req.params.id);
    res.redirect('/'+req.params.userNumber)
})

module.exports=router;