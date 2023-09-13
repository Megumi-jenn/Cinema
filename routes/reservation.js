const express = require("express");
const app = express.Router();
const path = require("path");
const config = require("../config");
const model = require("../models/reservation");

//recupère l'id de la page film
app.get("/:id", (req, res) => {
  model.seance(req.params.id, (data) => {
    res.render("reservation", {
      id_film: req.params.id,
      titre_film: data[0].titre,
      donnees: data
    });
  }) 
});

//recupère l'id de la page seance
app.get("/:idS", (req, res) => {
  model.jointure(req.params.idS, (data) => {
    res.render("reservation", {
      id_seance: req.params.idS,
      //horaireS: data[2].horaireS,
      donnees: data
    });
  })
});

//recupère l'id de la page client
app.get("/:idC", (req, res) => {
  model.client(req.params.idC, (data) => {
    res.render("reservation", {
      id_client: req.params.idC,
      donnees: data
    });
  });
});

app.get("/", (req, res) => {
   model.listeR((data) => {
  res.render("ResultatReservation", {
    donnees: data,
  });
}); 
});

app.post("/:idR", (req, res) => {
  model.createC(req.body.nomC,req.body.ageC,(idClient) => {
    model.createR(idClient, req.body.chaise, () => {
      res.redirect("/reservation");
    }); 
  });
});


app.get("/deleteR/:id", (req, res) => {
  model.deleteR(req.params.id, (data) => {
    res.redirect("/reservation");
  });
});

//pour exporter le fichier
module.exports = app;
