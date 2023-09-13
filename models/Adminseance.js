var config = require("../config");
const db = config.db;

exports.listeS = (callback) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Seance", 
      [], 
      (err, rows) => {
      if (err) throw err;
      callback(rows);
    });
  });
};

exports.createS = (date,horaire,callback) => {
    db.serialize(() => {
      db.run(
        "INSERT INTO Seance (dateS,horaireS) VALUES(?,?)",
        [date,horaire],
        (err, result) => {
          if (err) throw err;
          callback(result);
        }
      );
    });
  };

  exports.deleteS = (id, callback) => {
    db.serialize(() => {
      db.run(
        "DELETE FROM Seance WHERE id_seance = ?", 
        [id],
         (err, result) => { 
        if (err) throw err;
        callback(result);
      });
    });
  };
  
  exports.updateS = (idS,date,horaire,idF,callback) => {
    db.serialize(() => {
      db.run(
        "UPDATE Seance SET dateS=?,horaireS=?,id_film=? WHERE id_seance=?",
        [nom,age,id],
        (err, result) => {
          if (err) throw err;
          callback(result);
        });
    });
  };