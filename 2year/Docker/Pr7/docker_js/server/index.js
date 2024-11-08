const express = require("express")
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(8000, () => {
    console.log("Сервер работает на порту 8000")
})