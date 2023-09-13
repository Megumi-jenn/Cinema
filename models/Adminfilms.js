var config = require("../config");
const db = config.db;

exports.listeF = (callback) => {
  db.serialize(() => {
    db.all("SELECT * FROM Film", [], (err, rows) => {
      if (err) throw err;
      callback(rows);
    });
  });
};

exports.createF = (titre,callback) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Film(titre) VALUES(?)",
      [titre],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  });
};

exports.deleteF = (id, callback) => {
  db.serialize(() => {
    db.run(
      "DELETE FROM Film WHERE id_film = ?", 
      [id],
       (err, result) => {
      if (err) throw err;
      callback(result);
    });
  });
};