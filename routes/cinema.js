const express = require("express");
const app = express.Router(); 
const model = require("../models/Adminfilms");

app.get("/", (req, res) => {
  model.listeF((data) => {
    res.render("cinema", {
      donnees: data,
    });
  });
});

//pour exporter le fichier
module.exports = app;