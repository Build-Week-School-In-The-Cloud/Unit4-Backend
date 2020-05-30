const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports =  (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json({message: 'Access Denied'})
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({error: 'Invalid Token'})
    }
}