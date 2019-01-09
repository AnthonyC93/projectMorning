//import express
//import todos.js
var todos=require('../models/todos');
var users = require('../models/users');
var express=require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    //load page that checks for local storage 
    res.render('rootCheck');
})

router.get('/form'),function(req,res){
    res.render('formchoice',randomObject);
    console.log('FORM CHOICE LOADED')
}

router.get('/:userNumber',function(req,res){
    let userNumber = req.params.userNumber
    console.log('entered GET/:userNumber route');
    console.log('userNumber = '+userNumber)
    users.getAllUserInfo(userNumber,function(userData){
        todos.getAllTasks(userNumber,function(userTasks){
            // console.log(userData);
            // console.log(userTasks);
            arbitraryName={
                homeLL:userData[0].homeLL,
                workLL:userData[0].workLL,
                todos:userTasks,
                homeCity:userData[0].homeCity,
                workCity:userData[0].workCity,
                userNumber:userData[0].userNumber
            }
            // console.log(arbitraryName);
            res.render('index',arbitraryName);
        })   
    }) 
})

router.post('/',function(req,res){
    console.log('entered POST/ route');
    console.log(req.body);

    todos.addTask(req.body.userNumber,req.body.description,function(){
        console.log('task has been added')
        res.redirect('/'+req.body.userNumber);
    });
    // res.redirect('/');
})

router.delete('/todo',function(req,res){
    console.log('entered delete /todo route to clear table')
    userNumber=req.body.userNumber;
    todos.clearTable(userNumber);
})

router.put('/:userNumber/:id',function(req,res){
    console.log('entered PUT/:userNumber/:id route for marking as updated');
    todos.markAsDone(req.params.userNumber,req.params.id,function(){
        console.log('task updated boi')
        // res.redirect('/'+req.params.userNumber)
    });
})


// $.ajax('/'+this.id, {
//     type: "PUT"
// }).then(function(){
//     console.log('burger eaten!');
//     location.reload();
// })


// router.put('/:id',function(req,res){
//     todos.markAsDone(req.params.userNumber,req.params.id);
//     res.redirect('/'+req.params.userNumber)
// })

module.exports=router;