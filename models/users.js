//import orm.js
var orm = require('../config/orm');

var users = {
    getAllUserInfo:function(userNumber,callback){
        orm.getAllUserInfo(userNumber, function(response){
            callback(response);
        })
    },
    createNewUser:function(userNumber,name,city,longitude,latitude){
        orm.createNewUser(userNumber,name,city,longitude,latitude);
    },
    updateUserInfo:function(userNumber,newCity,newLongitude,newLatitude){
        orm.updateUser(userNumber,newCity,newLongitude,newLatitude)
    }
}

module.exports=users;
