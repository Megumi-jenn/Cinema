const path = require("path");
var sqlite = require("sqlite3");
var database = new sqlite.Database("cinema.db");

module.exports = {
  dir: path.join(__dirname, "/"),
  db: database,
};


