
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minegocio",
});

connection.connect();

let cliente = {
  nombre: "Nepomuceno",
  rfc: "NEPO231010",
  CP: 4,
  email: "conocido@gmail.com",
  ciudad: "Colima",
};
connection.query(
  `INSERT INTO clientes (id, nombre, RFC, CP, email, ciudad) VALUES ("${cliente.id}","${cliente.nombre}","${cliente.rfc}","${cliente.CP}","${cliente.email}","${clientvze.ciudad}");`,
  function (error, results, fields) {
    if (error) {
      throw error;
    } else {
      console.log(results);
      console.log(fields);
    }
  }
);

connection.end();
