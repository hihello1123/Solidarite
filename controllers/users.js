const { users, boards } = require("../models")

module.exports = {
    join: (req, res) => {
        const { email, nickname, password } = req.body

        console.log("join")
        res.send({ "data": "OK" })
    },

    login: (req, res) => {
        const { email, password } = req.body

        res.send({ message: "login" })
    }
}