var express = require('express');
var app = express();
var router = express.Router();

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


module.exports = router;