const auth = require("../middleware/auth")
const Agendamento = require("../models/agendamentoModel")

const agendamentoRouter = require("express").Router()
const jwt = require("jsonwebtoken")

agendamentoRouter.post("/createAgendamento", auth, async (req, res) => {
    try {
        const token = req.cookies.token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decodedToken.user;
        console.log("Token decoded, userID: " + userId);

        const { company, cliente, data, horario, situacao } = req.body

        const newAgendamento = new Agendamento({
            company,
            cliente: userId,
            data,
            horario,
            situacao: null
        })

        console.log(newAgendamento)

        //const savedAgendamento = await newAgendamento.save()
        //res.json(savedAgendamento)
    } catch (err) {
        res.send(err)
    }
})

module.exports = agendamentoRouter