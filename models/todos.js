//import orm.js
var orm = require('../config/orm');

//create the code that will call the ORM functions using task specific input for the ORM.
var todoList={
    getAllTasks:function(tableName,callBack){
        orm.getAllTasks(tableName,function(response){
            callBack(response);
        })
    },

    markAsDone:function(userNumber,idTask){
        orm.markAsDone(userNumber,idTask);
    },

    addTask:function(burgerName){
        orm.insertOne(burgerName)
    }
}

//export   
module.exports=todoList;