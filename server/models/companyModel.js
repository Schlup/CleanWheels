const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
    owner: { type: String },
    name: { type: String, required: true },
    serviceType: { type: [String], required: true }, // Fazer uma lista com todos os tipos disponiveis de serviço
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    cnpj: { type: String, required: true },
    adress: { type: String, required: false },
    employees: { type: [String], required: true } // Fazer com q o array seja de funcionarios
})

const Company = mongoose.model("company", companySchema)
module.exports = Company