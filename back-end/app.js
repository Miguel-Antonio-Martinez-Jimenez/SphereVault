const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const dbConfig = require('./config/db.config');

// Middleware
app.use(express.json()); // Parse JSON

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

dbConfig.connect();

module.exports = app;