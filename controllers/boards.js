const { users, boards } = require("../models")


module.exports = {
    postBoards: (req, res) => {
        console.log("postBoards")
    }, 

    getBoards: (req, res) => {
        res.send({ message: "getBoards" })
    }, 

    getBoardsId: (req, res) => {
        console.log("getBoardsId")
    }, 

    deleteBoards: (req, res) => {
        console.log("deleteBoards")
    }, 

    postBoardsLike: (req, res) => {
        console.log("postBoardsLike")
    }
}