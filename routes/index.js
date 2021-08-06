const express = require("express")
const router = express.Router();
const { auth } = require("../middlewares/authorization")
const { joinValidation, titleCheck } = require("../middlewares/validation")
const { join, login } = require("../controllers/users");
const { postBoards, getBoards, getBoardsId, deleteBoards, postBoardsLike } = require("../controllers/boards");


router.post("/users/join", joinValidation, join)
router.post("/users/login", login)

router.post("/boards", auth, postBoards)
router.get("/boards", getBoards)
router.get("/boards/:id", getBoardsId)
router.delete("/boards/:id", auth, deleteBoards)
router.post("/boards/:id/like", auth, postBoardsLike)

module.exports = router;