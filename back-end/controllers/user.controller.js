const User = require('../models/user.model');

// Registrar nuevo usuario
const registerUser = (req, res) => {
  const { google_id, nombre, apellido, email, imagen } = req.body;

  User.create({ google_id, nombre, apellido, email, imagen })
    .then(result => res.status(201).json({ id: result.insertId }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener usuario por ID
const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = { registerUser, getUserById };
