const client = require("./client");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            res.render("todos", {
                results: data.todos
            });
        }
    });
});
app.post("/save", (req, res) => {
    let newTodo = {
        title: req.body.title,
        content: req.body.content
    };
    client.insert(newTodo, (err, data) => {
        if (err) throw err;
        console.log("Туду создан", data);
        res.redirect("/");
    });
});
app.post("/update", (req, res) => {
    const updateTodo = {
        id: req.body.todoId,
        title: req.body.title,
        content: req.body.content
    };
    client.update(updateTodo, (err, data) => {
        if (err) throw err;
        console.log("Туду обновлен", data);
        res.redirect("/");
    });
});
app.post("/remove", (req, res) => {
    client.remove({ id: req.body.todoId }, (err, _) => {
        if (err) throw err;
        console.log("Туду удалён");
        res.redirect("/");
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Сервер запущен на порту %d", PORT);
});