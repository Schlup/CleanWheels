const serviceRouter = require("express").Router()
const Service = require("../models/serviceModel")
const Company = require("../models/companyModel")

const jwt = require("jsonwebtoken")
const companyauth = require("../middleware/companyauth")

// Register the service with the image already converted to base64

serviceRouter.post("/registerService", companyauth, async (req, res) => {
    try {
        const token = req.cookies.token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)

        const userId = decodedToken.user; 

        console.log("Token decoded, finding company...");

        // Encontrar a empresa onde o usuário é o proprietário
        const company = await Company.findOne({ owner: userId });
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }

        console.log(company);

        const { name, desc, tags, value, image } = req.body

        const newService = new Service({
            company: company._id,
            name,
            desc,
            value,
            image
        })

        const savedService = await newService.save()
        res.json(savedService)

    } catch (err) {
        res.send(err)
    }
})

module.exports = serviceRouter;