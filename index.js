const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const Router = require("./routes")

const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(cookieParser);

const port = 3000;

app.use("/api", Router)

const server = app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 작동중입니다.`)
})

module.exports = server