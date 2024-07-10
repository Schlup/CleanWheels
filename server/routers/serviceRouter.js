const serviceRouter = require("express").Router()
const Service = require("../models/serviceModel")
const Company = require("../models/companyModel")

const jwt = require("jsonwebtoken")
const companyauth = require("../middleware/companyauth")

const multer = require("multer")
const path = require("path")

//Middleware store images in the db

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/src/pages/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({ storage: storage });

serviceRouter.post("/registerService", companyauth, upload.single("image"), async (req, res) => {
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

        const { name, desc, tags, value } = req.body
        const image = req.file.filename

        console.log(image + " Imagem chegou no back")

        console.log({ name, desc, tags, value, image })

        const newService = new Service({
            company: company._id,
            name,
            desc,
            value,
            image
        })

        console.log(newService)

        const savedService = await newService.save()
        res.json(savedService)

    } catch (err) {
        res.send(err)
    }
})

serviceRouter.get("/getServices", async (req, res) => {
    try {
        Service.find({}).then((data) => {
            res.send({ status: "ok", data: data })
        })
    } catch (err) {
        res.json({ errorMessage: err })
    }
})

module.exports = serviceRouter;