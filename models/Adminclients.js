var config = require("../config");
const db = config.db;

exports.create = (nom, age, callback) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Client (nom,age) VALUES(?,?)",
      [nom, age],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  });
};

exports.listeC = (callback) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Client",
       [],
      (err, rows) => {
      if (err) throw err;
      callback(rows);
    });
  });
}

exports.updateC = (Id,Nom,Age,callback) => {
  db.serialize(() => {
    db.run(
      "UPDATE Client SET nom =?,age=? WHERE id_client=?",
      [Nom,Age,Id],
      (err, result) => {
        if (err) throw err;
        callback(result);
      });
  });
};


exports.delete = (id, callback) => {
  db.serialize(() => {
    db.run(
      "DELETE FROM Client WHERE id_client=?",
      [id],
      (err, result) => {
        if (err) throw err;
        callback(result);
      });
  });
};




