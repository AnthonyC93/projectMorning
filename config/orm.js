//require connection.js
var connection = require('./connection');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
function selectAll(callBack){
    connection.query('SELECT * FROM todos',function(err,data){
        if(err)throw err;

        if(typeof callBack==='function'){
            callBack(data);
        }
    })
}

// insertOne()
function insertOne(burgerName){
    console.log('going to insert '+burgerName)
    connection.query("INSERT INTO todos (burger_name,devoured) VALUES(?,0)",[burgerName],function(err,result){
        if(err) throw err;
    })
}

// updateOne()
function updateOne(newDevoured,idChosen){
    connection.query("UPDATE todos SET devoured=? WHERE id=?",[newDevoured,parseInt(idChosen)],function(err,data){
        if(err) throw err;
    })
}

// connection.query("SELECT * FROM ??",[todoListUser],function(err, res) {
//     if(err) throw err;
//     console.log(res);   
// });

// connection.query('CREATE TABLE ?? (id INT AUTO_INCREMENT NOT NULL,description VARCHAR(255),Completed BOOLEAN NOT NULL,PRIMARY KEY (id))',['coolUser123'],function(err,res){
//     if(err)throw err;
//     console.log(res);
// })


// Export the ORM object in module.exports.
module.exports={
    selectAll:selectAll,
    insertOne:insertOne,
    updateOne:updateOne,
    allBurgers:selectAll()
}