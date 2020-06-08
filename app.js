require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
var spawn = require("child_process").spawn;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("form");
});

app.post("/", function(req, res){
  const start = req.body.startpos;
  const end = req.body.endpos;
  const key = process.env.KEY;

  res.render("map", {key: key, start: start, end: end});
});

app.get("/testMap", function(req,res){
  const pythonProcess = spawn("python",["test.py"]);
  pythonProcess.stdout.on('data', function(data){
    mystr = data.toString();
    myjson = JSON.parse(mystr);

    console.log(myjson);

    res.render("map", {key: process.env.KEY, start: myjson.Start, end: myjson.End});
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
  console.log("Server is up and running");
})
