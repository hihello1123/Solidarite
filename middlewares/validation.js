const { user, board } = require("../models")

module.exports = {
    joinValidation: (req, res, next) => {
        // 이메일, 닉네임, 비밀번호 컬럼이 비었을 경우 400
        // 닉네임이 10자 초과인 경우 403
        // 비밀번호에 영문과 숫자가 포함되지 않았을 경우 403
        // 해당 이메일이 이미 존재할 경우 403
        console.log("joinValidation")
        return next();
    },
    

    titleCheck: (req, res, next) => {
        // 제목이 30자 넘어갈 경우 403
        return next();
    }
}