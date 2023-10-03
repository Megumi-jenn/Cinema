const express = require("express");
/*framework qui fournit fonctionnalités et d'outils pour gérer les routes, 
les requêtes et les réponses, ainsi que pour interagir avec les bases de données et d'autres services. 
*/
const path = require("path"); 

//relie le server aux fichiers du dossier Routes 
const root = require("./routes/cinema");
const clientsRoot = require("./routes/Adminclients");
const filmRoot = require("./routes/Adminfilms");
const seanceRoot = require("./routes/Adminseance");
//const reservationRoot = require("./routes/reservation");
//const AdminRoot= require("./routes/admin"); 
const loginRoot=require("./routes/Login"); 

var app = express(); 
var expressHbs = require("express-handlebars"); 
/*
Express.js, le framework JavaScript côté serveur. Les moteurs de modèles permettent de générer dynamiquement du contenu HTML en utilisant des modèles prédéfinis, 
ce qui facilite la création de pages web dynamiques.
Le rôle principal de express-handlebars est de simplifier la création de vues (parties visuelles) dans votre application Express en utilisant des modèles.
 Il offre une syntaxe simple et flexible pour intégrer des données dynamiques dans vos vues HTML.
*/

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
/*
body-parser est un module middleware pour Express.js, le framework JavaScript côté serveur que nous avons discuté précédemment. 
Son rôle principal est de faciliter l'analyse des données de corps (body) des requêtes HTTP, 
en particulier pour les données envoyées via des formulaires HTML ou des API.

Lorsqu'un client (généralement un navigateur web ou une application mobile) envoie des données à un serveur, 
ces données peuvent être incluses dans le corps (body) de la requête HTTP. body-parser permet à Express.js de déchiffrer et 
de traiter ces données de manière appropriée, en les rendant disponibles pour votre application sous forme d'objets JavaScript.
*/

//routes
app.use("/", root);
app.use("/clients", clientsRoot);
app.use("/films", filmRoot);
//app.use('/reservation', reservationRoot);
app.use("/seance", seanceRoot);
//app.use("/admin", AdminRoot);
app.use("/login",loginRoot);

var hbs = expressHbs.create({ 
  extname: ".hbs",
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use("/static", express.static(__dirname + "/static"));

//comparaison des template hbs 
hbs.handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {
  switch (operator) {
    case "==":
      return v1 == v2 ? options.fn(this) : options.inverse(this);
    case "===":
      return v1 === v2 ? options.fn(this) : options.inverse(this);
    case "!=":
      return v1 != v2 ? options.fn(this) : options.inverse(this);
    case "!==":
      return v1 !== v2 ? options.fn(this) : options.inverse(this);
    case "<":
      return v1 < v2 ? options.fn(this) : options.inverse(this);
    case "<=":
      return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case ">":
      return v1 > v2 ? options.fn(this) : options.inverse(this);
    case ">=":
      return v1 >= v2 ? options.fn(this) : options.inverse(this);
    case "&&":
      return v1 && v2 ? options.fn(this) : options.inverse(this);
    case "||":
      return v1 || v2 ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

const HTTP_PORT = 7000;
//lancement du server
app.listen(HTTP_PORT, () => {
  console.log("server en marche sur le port "+ HTTP_PORT);
  console.log();
});

