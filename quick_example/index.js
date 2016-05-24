// requirements
const express = require('express');
const app = express();
//const router = express.Router();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("The color you picked is: " + choice);
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.get("/taco/:index", function (req, res) {
	var index = req.params.index;
	var pick = tacos[index] || "Not a choice. Try again.";
	//console.log("hit");
	res.send(pick);
});

app.get("/burger/:index", function(req, res) {
	var index = req.params.index;
	var pick = burgers[index] || "Not a choice. Try again.";
	res.send(pick);
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + "!");
    }
});

// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});