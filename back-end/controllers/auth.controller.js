const { verifyToken } = require('../config/google.config');
const user = require('../models/user.model');
const { generateToken } = require('../services/auth.service');

const googleLogin = async (req, res) => 
{
    const { token } = req.body;
    
    try 
    {
        const payload = await verifyToken(token);
        const { sub: google_id, name: nombre, email, picture: imagen } = payload;

        // Check if user already exists
        const existingUser = await user.findByGoogleId(google_id);
        if (!existingUser) 
        {
            // Register new user
            await user.create({ google_id, nombre, apellido: '', email, contraseña: '', imagen });
        }
        
        // Generate JWT token
        const jwtToken = generateToken({ id: google_id });
        
        res.json({ token: jwtToken });
    } 
    catch (err) 
    {
        res.status(401).json({ error: 'Invalid token' });
    }
};
module.exports = { googleLogin };