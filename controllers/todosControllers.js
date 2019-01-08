//import express
<<<<<<< HEAD
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
=======
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
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
})

module.exports=router;