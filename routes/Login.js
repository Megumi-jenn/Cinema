const express = require("express");
const app = express.Router();
const path = require("path");
const config = require("../config");
const model = require("../models/Login");

app.get("/login", (req, res) => {
    res.render("Login"); //res.render rend la page donc c'est son nom qu'on met dans la parenthèse
  });

 app.post("/login", (req, res) => {
  model.createC(req.body.Nom,req.body.Age,(data) => {
      res.redirect("/login");
    }); 
  }); 

//pour exporter le fichier
module.exports = app;