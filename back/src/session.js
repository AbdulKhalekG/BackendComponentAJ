const fs = require('fs');
const DBComponent = require('./dbComponent'); // módulo de conexión a la base de datos

const db = new DBComponent('myDatabaseFile.json');  // instanciar objeto de conexión

// consultar todos los registros de la tabla users
db.query('SELECT * FROM usuarios', [], (err, results) => {
  if (err) console.error(err);

  // guardar los resultados en el archivo de sesión
  fs.writeFileSync('session.js', JSON.stringify({ usuarios: results }));
});