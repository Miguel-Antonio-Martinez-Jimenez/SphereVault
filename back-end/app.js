const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const dbConfig = require('./config/db.config');

// Middleware
app.use(express.json()); // Parse JSON

// Rutas
app.use('/api/users', userRoutes);

// Conectar a la base de datos
dbConfig.connect();

module.exports = app;
//comit de prueba
