//require connection.js
var connection = require('./connection');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//------------------------------------Task Queries----------------------------------------------------------------

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

function addTask(userNumber,taskName){
    let userTable= "todo"+userNumber;
    console.log('getting all tasks from '+userTable)

    console.log('going to insert '+taskName+' into '+userTable)
    connection.query("INSERT INTO ?? (description,completed) VALUES(?,0)",[userTable,taskName],function(err,result){
        if(err) throw err;
    })
}

function markAsDone(userNumber,taskId){
    let userTable= "todo"+userNumber;
    console.log('updating task '+taskId+' from '+userTable)

    connection.query("UPDATE ?? SET completed=1 WHERE id=?",[userTable,taskId],function(err,data){
        if(err) throw err;
    })
}

function clearToDoTable(userNumber){
    let todoListUser= "todo"+userNumber;
    connection.query('DELETE FROM ??',[todoListUser],function(err,res){
        if(err) throw err;
        console.log(userNumber + " table deleted!");
    })
}


//------------------------------------User Queries----------------------------------------------------------------

function getAllUserInfo(userNumber,callBack){
    connection.query('SELECT * FROM users WHERE userNumber=?',[userNumber],function(err,data){
        if(err)throw err;

        if(typeof callBack==='function'){
            callBack(data);
        }
    })
}

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

function createTodoTable(newTableName){
    connection.query('CREATE TABLE ?? (id INT AUTO_INCREMENT NOT NULL,description VARCHAR(255),completed BOOLEAN NOT NULL,PRIMARY KEY (id))',[newTableName],function(err,res){
        if(err)throw err;
        console.log("new table created!");
    })
}

function updateUser(userNumber,newHomeCity,newWorkCity,newHomeLL,newWorkLL){
    connection.query('UPDATE users SET homeCity=?,workCity=?,homeLL=?,workLL=? WHERE userNumber=',[newHomeCity,newWorkCity,newHomeLL,newWorkLL,userNumber],function(err,res){
        if(err) throw err;
        console.log("new user created!");
    })
}

function deleteUser(userNumber){
    connection.query('DELETE FROM users WHERE userNumber=?',[userNumber],function(err,res){
        if (err) throw err;
        console.log(userNumber + " deleted!");
    })
}

// Export the ORM object in module.exports.
module.exports={
    getAllTasks:getAllTasks,
    getAllUserInfo:getAllUserInfo,
    addTask:addTask,
    markAsDone:markAsDone,
    createNewUser:createNewUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    clearToDoTable:clearToDoTable
}