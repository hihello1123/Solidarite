

module.exports = {
    nicknameCheck: (req, res) => {
        // 닉네임이 10자 초과인 경우 403
    },

    passworkCheck: (req, res) => {
        // 비밀번호에 영문과 숫자가 포함되지 않았을 경우 403
    },

    titleCheck: (req, res) => {
        // 제목이 30자 넘어갈 경우 403
    }
}