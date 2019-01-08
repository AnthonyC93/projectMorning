//require connection.js
var connection = require('./connection');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// getAllTasks()
function getAllTasks(userNumber,callBack){
    let tableName= "todo"+userNumber;
    console.log('getting all tasks from '+tableName)

    connection.query('SELECT * FROM ??',[tableName],function(err,data){
        if(err)throw err;

        if(typeof callBack==='function'){
            callBack(data);
        }
    })
}

function getAllUserInfo(userNumber,callBack){
    connection.query('SELECT * FROM users WHERE userNumber=?',[userNumber],function(err,data){
        if(err)throw err;

        if(typeof callBack==='function'){
            callBack(data);
        }
    })
}

// addTask()
function addTask(userNumber,taskName){
    let userTable= "todo"+userNumber;
    console.log('getting all tasks from '+userTable)

    console.log('going to insert '+taskName+' into '+userTable)
    connection.query("INSERT INTO ?? (description,completed) VALUES(?,0)",[userTable,taskName],function(err,result){
        if(err) throw err;
    })
}

// markAsDone()
function markAsDone(userNumber,taskId){
    let userTable= "todo"+userNumber;
    console.log('updating task '+taskId+' from '+userTable)

    connection.query("UPDATE ?? SET completed=1 WHERE id=?",[userTable,taskId],function(err,data){
        if(err) throw err;
    })
}

//create new user
function createNewUser(newUserNumber, newUserName,newHomeCity,newWorkCity,newHomeLL,newWorkLL){
    connection.query('CREATE TABLE ?? (userNumber,userName,homeCity,workCity,homeLL,workLL',[newUserNumber, newUserName,newHomeCity,newWorkCity,newHomeLL,newWorkLL],function(err,res){
        if(err) throw err;
        console.log("new user created!");

        let todoListUser= "todo"+newUserNumber;
        console.log(todoListUser);
        console.log(typeof todoListUser);

        createTodoTable(todoListUser);
    })
}

//create table when new user created.
function createTodoTable(newTableName){
    connection.query('CREATE TABLE ?? (id INT AUTO_INCREMENT NOT NULL,description VARCHAR(255),completed BOOLEAN NOT NULL,PRIMARY KEY (id))',[newTableName],function(err,res){
        if(err)throw err;
        console.log("new table created!");
    })
}


// Export the ORM object in module.exports.
module.exports={
    getAllTasks:getAllTasks,
    getAllUserInfo:getAllUserInfo,
    addTask:addTask,
    markAsDone:markAsDone,
    createNewUser:createNewUser
}