const express = require("express");
const app = express.Router();
const path = require("path");
const config = require("../config");
const model = require("../models/Adminseance");

app.get("/", (req, res) => {
  model.listeS((data) => {
    res.render("Adminseance", {
      donnees: data,
    });
  });
});

app.post("/", (req, res) => {
  model.createS(req.body.Date, req.body.heure, (data) => {
    res.redirect("/seance");
  });
});

app.get("/deleteS/:id", (req, res) => {
  model.deleteS(req.params.id, (data) => {
    res.redirect("/seance");
  });
});

app.get("/update/:idS/:date/:horaire/:idF", (req, res) => {
  model.updateS(req.params.idS, req.params.date, req.params.horaire, req.params.idF, (data) => {
    res.redirect("/seance");
  });
});

//pour exporter le fichier module
module.exports = app;