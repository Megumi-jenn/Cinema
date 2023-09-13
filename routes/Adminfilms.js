const express = require("express");
const app = express.Router();
const path = require("path");
const config = require("../config");
const model = require("../models/Adminfilms");

//recupère la page film
app.get("/", (req, res) => {
  model.listeF((data) => {
    res.render("Adminfilms", {
      donnees: data,
    });
  });
});

app.post("/", (req, res) => {
  model.createF(req.body.title, (data) => {
    res.redirect("/films");
  });
});

app.get("/delete/:id", (req, res) => {
  model.deleteF(req.params.id, (data) => {
    res.redirect("/films");
  });
});
//pour exporter le fichier module
module.exports = app;
