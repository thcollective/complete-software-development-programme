const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    try {
        const decoded = jwt.verify(token, "TOP_SECRET")
        res.user = decoded;
        next()
    } catch (error) {
        res.status(401).json(error)
    }
}


module.exports = verifyToken