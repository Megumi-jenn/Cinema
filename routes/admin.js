
const express = require("express");
const app = express.Router();
const path = require("path");
/*
Les routes définissent les points d'entrée de votre application web. 
Chaque point d'entrée correspond généralement à une URL spécifique (par exemple "/contact") et
 est associé à une action ou une logique spécifique à exécuter lorsque cet URL est atteint.
 */

app.get("/admin", (req, res) => {
  res.render("admin");
}); 

app.get("/clients", (req, res) => {
  res.render("Adminclients", {
  }); 
});

app.get("/seance", (req, res) => {
  res.render("Adminseance", {
  });
}); 

app.get("/films", (req, res) => {
  res.render("Adminfilms", {
  });
});

//pour exporter le fichier module
module.exports = app;

/*
// admin.js
const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/", (req, res) => {
  // Page d'accueil de l'administration
});

router.get("/clients", (req, res) => {
  res.render("Adminclients", {
  }); 
});

router.get("/films", (req, res) => {
  res.render("Adminfilms", {
  });
});

// Ajoutez d'autres routes d'administration au besoin

module.exports = router;
*/