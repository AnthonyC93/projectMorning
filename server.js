var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(express.static("./public/assets"));
=======
app.use(express.static("./public"));
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
var router = require('./controllers/burgers_controller');
=======
var router = require('./controllers/todosControllers');
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
app.use("/",router);

var PORT = process.env.PORT || 4000;  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});