var express=require('express');
// var app = express();
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

// router.get('/show/:userNumber',function(req,res){
//     let userNumber = req.params.userNumber
//     console.log('userNumber = '+userNumber)
//     users.getAllUserInfo(userNumber,function(userData){
//         todos.getAllTasks(userNumber,function(userTasks){
//             console.log(userData);
//             console.log(userTasks);
//             arbitraryName={
//                 homeLL:userData[0].homeLL,
//                 workLL:userData[0].workLL,
//                 todos:userTasks,
//                 homeCity:userData[0].homeCity,
//                 workCity:userData[0].workCity,
//                 userNumber:userData[0].userNumber
//             }
//             console.log(arbitraryName);
//             res.render('index',arbitraryName);
//         })   
//     })
    
//     console.log(res);
// })

module.exports=router;