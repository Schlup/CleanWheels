const jwt = require("jsonwebtoken")
const Company = require("../models/companyModel")

function companyauth(req, res, next) {
    try {
        const token = req.cookies.token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const result = Company.findOne({ owner: decodedToken.user });

        if (result === null) return res.send(false)

        next();
    } catch (err) {
        console.error(err)
        res.status(401).json({ errorMessage: "Unauthorized Company" })
    }
}

module.exports = companyauth