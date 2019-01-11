// var app = express();
var express=require('express');
var users = require('../models/users');
var todos=require('../models/todos');
var router = express.Router();

router.get('/:userNumber',(req,res)=>{
    const userNumber = req.params.userNumber

    console.log('***req.response** = ' + JSON.stringify(req.path))
    console.log('userNumber = '+userNumber)
    console.log('entered show/usernumber')
    
    users.getAllUserInfo(userNumber,function(userData){
        todos.getAllTasks(userNumber,function(userTasks){
            console.log(userData);
            console.log(userTasks);
            arbitraryName={
                name:userData[0].name,
                todos:userTasks,
                city:userData[0].city,
                longitude:userData[0].longitude,
                latitude:userData[0].latitude,
                userNumber:userData[0].userNumber,
                motivation:'test quote'
            }
            console.log(arbitraryName);
            res.render('index',arbitraryName);
        })   
    })
})

module.exports=router;