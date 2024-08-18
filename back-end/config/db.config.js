const mysql = require('mysql');
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

// Crear conexión con la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true // Permite ejecutar múltiples consultas en una sola llamada
});

// Función para conectar y verificar la base de datos
const connect = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      process.exit(1);
    }
    console.log('Conectado a la base de datos');

    // Verificar y crear la base de datos si no existe
    const dbName = process.env.DB_NAME;
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``, (err) => {
      if (err) {
        console.error('Error creando la base de datos:', err);
        process.exit(1);
      }

      console.log(`Base de datos ${dbName} creada o ya existe`);

      // Seleccionar la base de datos
      connection.query(`USE \`${dbName}\``, (err) => {
        if (err) {
          console.error('Error seleccionando la base de datos:', err);
          process.exit(1);
        }

        // Verificar y crear la tabla si no existe
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            google_id VARCHAR(255) UNIQUE NOT NULL,
            nombre VARCHAR(255) NOT NULL,
            apellido VARCHAR(255),
            email VARCHAR(255) NOT NULL UNIQUE,
            imagen VARCHAR(255),
            fecha_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;

        connection.query(createTableQuery, (err) => {
          if (err) {
            console.error('Error creando la tabla de usuarios:', err);
            process.exit(1);
          }

          console.log('Tabla de usuarios creada o ya existe');
        });
      });
    });
  });
};

// Exporta la conexión y la función de conexión
module.exports = { connection, connect };
