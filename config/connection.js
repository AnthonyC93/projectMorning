//setup the code to connect Node to MySQL.
<<<<<<< HEAD
//export the connectin
=======
//export the connection
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "morningUsers"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id " + connection.threadId);
})

module.exports= connection;