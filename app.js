const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const year = new Date().getFullYear();

app.get("/", function(req, res){

  res.render("index", {year});
});

app.get("/bio", function(req, res){

  res.render("bio", {year});
});

app.get("/resume", function(req, res){
  res.render("resume", {year});
});

app.get("/tuba", function(req, res){
  res.render("tuba", {year});
});

app.get("/piano", function(req, res){
  res.render("piano", {year});
});

app.get("/news", function(req, res){
  res.render("news", {year});
});

app.get("/media", function(req, res){
  res.render("media", {year});
});

app.get("/theory", function(req, res){
  res.render("music theory", {year});
});

app.get("/contact", function(req, res){
  res.render("contact", {year});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
