const user = require('../models/user.model');

const registerUser = (req, res) => 
{
    const { google_id, nombre, apellido, email, contraseña, imagen } = req.body;
  
    user.create({ google_id, nombre, apellido, email, contraseña, imagen })
    .then(result => res.status(201).json({ id: result.insertId }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getUserById = (req, res) => 
{
    const { id } = req.params;
  
    user.findById(id)
    .then(user => 
    {
        if (user) 
        {
          res.json(user);
        } 
        else 
        {
          res.status(404).json({ message: 'Usuario no encontrado' });
        }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
module.exports = { registerUser, getUserById };