// Middleware para verificar autenticación (si se usa)
const verifyToken = (req, res, next) => {
    // Implementar lógica de verificación de token aquí
    next();
  };
  
  module.exports = { verifyToken };
  