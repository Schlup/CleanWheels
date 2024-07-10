const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    company: { type: String },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    tags: { type: [String], required: false },
    value: { type: Number, required: true },
    image: { type: String, data: Buffer, required: true }
})

const Service = mongoose.model("service", serviceSchema)
module.exports = Service