//import orm.js
var orm = require('../config/orm');

var users = {
    getAllUserInfo:function(userNumber,callback){
        orm.getAllUserInfo(userNumber, function(response){
            callback(response);
        })
    },
    createNewUser:function(newUserNumber, newUserName,newHomeCity,newWorkCity,newHomeLL,newWorkLL){
        orm.createNewUser(newUserNumber, newUserName,newHomeCity,newWorkCity,newHomeLL,newWorkLL);
    }
}

module.exports=users;
