const express = require("express");
const app = express.Router(); 

app.get("/", (req, res) => {
  model.listeF((data) => {
    res.render("cinema", {
      donnees: data,
    });
  });
});

//pour exporter le fichier
module.exports = app;