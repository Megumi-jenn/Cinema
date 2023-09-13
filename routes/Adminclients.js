const express = require("express");
const app = express.Router();
const path = require("path");
const config = require("../config");
const model = require("../models/Adminclients");

app.get("/", (req, res) => {
  model.listeC((data) => {
    res.render("Adminclients", {
      donnees: data,
    });
  });
});

app.post("/", (req, res) => {
  model.create(req.body.nom, req.body.age, (data) => {
    res.redirect("/clients");
  });
});

app.get("/delete/:id", (req, res) => {
  model.delete(req.params.id, (data) => {
    res.redirect("/clients");
  });
});

app.get("/update/:Id/:Nom/:Age",(req, res) => {
model.updateC(req.params.Nom,req.params.Age,req.params.Id, (data) => {
 res.redirect("/clients"); 
});
}); 

//pour exporter le fichier module
module.exports = app;
