const companyRouter = require("express").Router()
const Company = require("../models/companyModel")
const auth = require("../middleware/auth")

const jwt = require("jsonwebtoken")

const multer = require("multer")
const path = require("path")

//Middleware store images in the db

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/src/pages/imagesCompany");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({ storage: storage });

// Signup
companyRouter.post("/signup", auth, upload.single("image"), async (req, res) => {
    try {
        const { owner, name, serviceType, email, phone, cnpj, adress, employees } = req.body
        const image = req.file.filename

        console.log(image + " Imagem chegou no back")

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
            image,
            name,
            serviceType,
            email,
            phone,
            cnpj,
            adress,
            employees
        })

        console.log({ owner, name, serviceType, email, phone, cnpj, adress, employees, image })

        const savedCompany = await newCompany.save()
        res.json(savedCompany)

    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Error creating company" })
    }
});

companyRouter.get("/companyOwner", async (req, res) => {
    try {
        const token = req.cookies.token

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)

        const result = await Company.findOne({ owner: decodedToken.user });

        if (result === null) return res.send(false)
        res.send(true)

    } catch (err) {
        res.send(false)
    }
})

companyRouter.get("/getInfo", auth, async (req, res) => {
    try {
        const token = req.cookies.token

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)
        res.send(decodedToken)
    } catch (err) {
        res.send(err)
    }
})

module.exports = companyRouter;