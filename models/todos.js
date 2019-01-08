//import orm.js
var orm = require('../config/orm');

//create the code that will call the ORM functions using task specific input for the ORM.
var todoList={
    all:function(callBack){
        orm.selectAll(function(response){
            callBack(response);
        })
    },

    update:function(newValue,userNumber){
        orm.updateOne(newValue,userNumber);
    },

    add:function(burgerName){
        orm.insertOne(burgerName)
    }
}


//export   
module.exports=todoList;