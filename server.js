var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/form",express.static("./public"))
app.use("/show",express.static("./public"))

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/todosController');
var formRouter = require('./controllers/formController');
var showRouter = require('./controllers/showController');
app.use("/",router);
app.use("/form",formRouter);
app.use("/show",showRouter);


var PORT = process.env.PORT || 4000;  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});