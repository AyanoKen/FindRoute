require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

//const url = "https://api.mapbox.com/directions/v5/mapbox/driving/"
// start = '-122.42,37.78'
// end = '-122.434924,37.794240'


app.get("/", function(req, res){
  res.render("form");
});

app.post("/", function(req, res){
  const start = req.body.startpos;
  const end = req.body.endpos;
  const key = process.env.KEY;

  res.render("map", {key: key, start: start, end: end});
})

app.listen(3000, function(){
  console.log("Server is up and running");
})
