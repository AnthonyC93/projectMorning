//import orm.js
var orm = require('../config/orm');

//create the code that will call the ORM functions using task specific input for the ORM.
var todoList={
<<<<<<< HEAD
    all:function(callBack){
        orm.selectAll(function(response){
=======
    getAllTasks:function(tableName,callBack){
        orm.getAllTasks(tableName,function(response){
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
            callBack(response);
        })
    },

<<<<<<< HEAD
    update:function(newValue,userNumber){
        orm.updateOne(newValue,userNumber);
    },

    add:function(burgerName){
=======
    markAsDone:function(userNumber,idTask){
        orm.markAsDone(userNumber,idTask);
    },

    addTask:function(burgerName){
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
        orm.insertOne(burgerName)
    }
}


//export   
<<<<<<< HEAD
module.exports=burger;
=======
module.exports=todoList;
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
