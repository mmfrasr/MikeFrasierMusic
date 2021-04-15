const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index", {});
});

app.get("/bio", function(req, res){
  res.render("bio", {});
});

app.get("/resume", function(req, res){
  res.render("resume", {});
});

app.get("/tuba", function(req, res){
  res.render("tuba", {});
});

app.get("/piano", function(req, res){
  res.render("piano", {});
});

app.get("/news", function(req, res){
  res.render("news", {});
});

app.get("/media", function(req, res){
  res.render("media", {});
});

app.get("/theory", function(req, res){
  res.render("music theory", {});
});

app.get("/contact", function(req, res){
  res.render("contact", {});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
