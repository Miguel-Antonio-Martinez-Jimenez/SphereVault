const MySQL_SphereVault = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection
(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
  }
);

const connect = () => 
{
  connection.connect((err) =>
  {
    if (err) 
    {
      console.error('Error al conectar a la base de datos: ', err);
      process.exit(1);
    }
    console.log('Conectado a la base de datos. / Connected to the database.');

    const dbName = process.env.DB_NAME;
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``, (err) => 
    {
      if (err) 
      {
        console.error('Error al crear la base de datos: ', err);
        process.exit(1);
      }
      console.log(`Base de datos ${dbName} creada o ya existente.`);

      connection.query(`USE \`${dbName}\``, (err) => 
      {
        if (err) 
        {
          console.error('Error al seleccionar la base de datos:', err);
          process.exit(1);
        }
        const createTableQuery = 
        `CREATE TABLE IF NOT EXISTS usuarios 
          (
            id INT AUTO_INCREMENT PRIMARY KEY,
            google_id VARCHAR(255) UNIQUE NOT NULL,
            nombre VARCHAR(255) NOT NULL,
            apellido VARCHAR(255),
            email VARCHAR(255) NOT NULL UNIQUE,
            imagen VARCHAR(255),
            contraseña VARCHAR(255) NOT NULL,
            fecha_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;
      
        connection.query(createTableQuery, (err) =>
        {
          if (err) 
          {
            console.error('Error al crear la tabla de usuarios:', err);
            process.exit(1);
          }
          console.log('Tabla de usuarios creada o ya existente');
        });
      });
    });
  });
};
module.exports = { connection, connect };