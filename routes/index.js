const express = require("express")
const router = express.Router();
const { auth } = require("../middlewares/authorization")
const { validation } = require("../middlewares/validation")
const { join, login } = require("../controllers/users");
const { postBoards, getBoards, getBoardsId, deleteBoards, postBoardsLike } = require("../controllers/boards");

router.post("/users/join", join)
router.post("/users/login", login)

router.post("/users/boards", auth, postBoards)
router.get("/users/boards", getBoards)
router.get("/users/boards/:id", getBoardsId)
router.delete("/users/boards/:id", auth, deleteBoards)
router.post("/users/boards/:id/like", auth, postBoardsLike)

module.exports = router;