require("dotenv").config();
var express = require('express');
var path = require("path");
var keys = require("./config/keys.js");
const axios = require("axios");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/form",express.static("./public"))
app.use("/show",express.static("./public"))

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// var router = require('./controllers/todosControllers');
// app.use("/",router);

app.set("view engine", "handlebars");


app.get("/homeMockUp", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/homeMockup.html"));
});
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

app.post("/api/weather", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // console.log(keys.weather);
    var weather = keys.weather.id;
    var loc = req.body;
    //loc.longitude loc.latitude
    var long = loc.longitude; //40.7406424 
    var lat = loc.latitude; //-74.0615268 
    //call weather api passing these latitude and longitude
    //return required data
    // console.log(long);
    axios.get('https://api.darksky.net/forecast/' + weather + '/' + lat + ',' + long)
    .then(function (response) {
        // console.log(response);
        console.log("Temp : " + response.data.currently.temperature + "  Degree f");
        console.log("Humidity : " + response.data.currently.humidity);
        console.log("Wind-speed : " + response.data.currently.windSpeed);
        var weather = {};
        weather.temp = response.data.currently.temperature;
        weather.humidity= response.data.currently.humidity;
        return res.json(weather);
    })
    .catch(function (error) {
        console.log(error);
    });
});

