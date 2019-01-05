var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/assets"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/burgers_controller');
app.use("/",router);

var PORT = process.env.PORT || 4000;  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});