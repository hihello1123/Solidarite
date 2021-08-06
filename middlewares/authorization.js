const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

module.exports = {
    auth: (req, res, next) => {
        // 인증 정보가 없을 경우 401
        res.send({ message: "auth" })
        return next();
    }
}