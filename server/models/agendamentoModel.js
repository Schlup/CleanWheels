const mongoose = require("mongoose")

const agendamentoSchema = new mongoose.Schema({
    company: { type: String },
    cliente: { type: String },
    data: { type: Date, required: true },
    horario: { type: String, required: true },
    situacao: { type: Boolean }
})

const Agendamento = mongoose.model("agendamento", agendamentoSchema)
module.exports = Agendamento