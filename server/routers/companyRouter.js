const companyRouter = require("express").Router()
const Company = require("../models/companyModel")
const auth = require("../middleware/auth")

const User = require("../models/companyModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Signup
companyRouter.post("/signup", auth, async (req, res) => {
    try {
        const { owner, name, serviceType, email, phone, cnpj, adress, employees } = req.body

        if (!name)
            return res.status(400).json({ errorMessage: "Please insert the company name." })

        if (!serviceType)
            return res.status(400).json({ errorMessage: "Please insert the service type." })

        if (!email)
            return res.status(400).json({ errorMessage: "Please insert the company email." })

        if (!phone)
            return res.status(400).json({ errorMessage: "Please insert the company phone." })

        if (!cnpj)
            return res.status(400).json({ errorMessage: "Please insert the company CNPJ." })

        // TODO: Check if there is at least one employee registered

        const token = req.cookies.token
        const verified = jwt.verify(token, process.env.JWT_SECRET)

        const userId = verified.user

        console.log("Company owner: ", userId)

        const newCompany = new Company({
            owner: userId,
            name,
            serviceType,
            email,
            phone,
            cnpj,
            adress,
            employees
        })

        const savedCompany = await newCompany.save()
        res.json(savedCompany)

    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Error creating company" })
    }
});

module.exports = companyRouter;