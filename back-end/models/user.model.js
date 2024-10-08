const connection = require('../config/db.config').connection;

const create = ({ google_id, nombre, apellido, email, contraseña, imagen }) => 
{
    return new Promise((resolve, reject) => 
    {
        const query = 'INSERT INTO usuarios (google_id, nombre, apellido, email, imagen) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(query, [google_id, nombre, apellido, email, contraseña, imagen], (err, results) => 
        {
            if (err) reject(err);
            resolve(results);
        });
    });
};

const findById = (id) => 
{
    return new Promise((resolve, reject) => 
    {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        connection.query(query, [id], (err, results) => 
        {
            if (err) reject(err);
            resolve(results[0]);
        });
    });
};
module.exports = { create, findById };