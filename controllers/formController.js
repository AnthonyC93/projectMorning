var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.get("/", (req,res)=>{
    console.log('entered /form GET route')
    res.render("formchoice",{layout: 'forms.handlebars'});
})

router.get("/new",(req,res)=>{
    console.log('entered /form/new GET');
    res.render("newUser",{layout: 'forms.handlebars'});
})

router.get('/enternumber',(req,res)=>{
    console.log('entered /form/enternumber')
    res.render("enterUser",{layout: 'forms.handlebars'});
})

router.post('/new',(req,res)=>{
    console.log('entered POST /new');
    console.log('req.body = '+JSON.stringify(req.body));

    users.createNewUser(req.body.userNumber,req.body.name,req.body.city,req.body.longitude,req.body.latitude,function(){
        console.log('users.createNewUser in formcontrollers about to redirect')
        res.redirect('/show/'+req.body.userNumber);
    });
    //need to figure out how to send page to show/userNumber


})



module.exports = router;