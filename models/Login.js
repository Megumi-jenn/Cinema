var config = require("../config");
const db = config.db;

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
  };