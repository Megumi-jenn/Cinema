var config = require("../config");
const db = config.db;

//relie seance à film
exports.seance = (id, callback) => {
  db.serialize(() => {
    const querry = "SELECT Film.titre, Seance.id_seance,Seance.horaireS FROM Seance INNER JOIN Film ON Film.id_film = Seance.id_film WHERE Film.id_film=?"
    db.all(querry,
      [id],
      (err, rows) => {
        if (err) throw err;
        callback(rows); 
      });
  });
};

//relise Seance à Reservation
exports.jointure = (idS, callback) => {
  db.serialize(() => { 
    /* const querryR = "SELECT Seance.dateS,Seance.horaireS FROM Seance INNER JOIN Reservation ON Seance.id_seance=Reservation.id_seance" */
    const querryR = "SELECT * FROM Seance INNER JOIN Reservation ON Seance.id_seance=Reservation.id_seance WHERE Seance.id_seance = ?";
    db.all(querryR,
      [idS],
      (err, rows) => {
        if (err) throw err;
        callback(rows);
      });
  });
};

/*
//relie client à reservation
exports.client = (idC, callback) => {
  db.serialize(() => {
    /* const querryC = "SELECT Client.nom,Client.age FROM Client INNER JOIN Reservation ON Client.id_client=Reservation.id_client" 
    const querryC = "SELECT * FROM Client INNER JOIN Reservation ON Client.id_client=Reservation.id_client WHERE Client.id_client = ?";
    db.all(querryC,
      [idC],
      (err, rows) => {
        if (err) throw err;
        callback(rows);
      });
  });
} */


//DEBUT CRUD RESERVATION
exports.listeR = (callback) => {
  db.serialize(() => {
    const querry = "SELECT * From Reservation "
    db.all(
      querry,
      [],
      (err, rows) => {
        if (err) throw err;
        callback(rows);
      });
  });
};
/*
//insertion de nouveau client
exports.createC = (nom, age, callback) => {
  db.serialize(() => { //pour executer sequentiellement les opération
    db.run( //pour executer une req SQL
      "INSERT INTO Client(nom,age) VALUES(?,?)",
      [nom, age],
      (err, result) => { 
        if (err) throw err;
        callback(result);//pour transmettre le res en param lors que CreateC est appelé
      }
      ); 
  });
};*/

exports.createR = (idClient, siege, callback) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Reservation(id_client,nb_chaise) VALUES(?,?)",
      [idClient, siege],
       (err, result) => {
        if (err) throw err;
        callback(result);
      } 
    );
  });
};

exports.deleteR = (id, callback) => {
  db.serialize(() => {
    db.run(
      "DELETE FROM Reservation WHERE id_reservation=?",
      [id],
      (err, result) => {
        if (err) throw err;
        callback(result);
      });
  });
};


