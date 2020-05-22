const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
        if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Invalid Credentials"})
            } else {
                req.user = {username: decoded.username}
                next();
            }
        })

        } else { 
            res.status(400).json({ error: 'Please log in'})
        }
    
}