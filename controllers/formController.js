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

    users.createNewUser(req.body.userNumber,req.body.name,req.body.city,req.body.longitude,req.body.latitude);
    //need to figure out how to send page to show/userNumber

    // let arbitraryName={
    //     name:req.body.name,
    //     city:req.body.city,
    //     longitude:req.body.longitude,
    //     latitude:req.body.latitude,
    //     userNumber:req.body.userNumber
    // }
    // res.render('index',arbitraryName);

})

// router.post('/enternumber',(req,res)=>{
//     console.log('entered POST form/enternumber/ route');
//     console.log(req.body);
    
//     
// })


module.exports = router;