var express = require("express"),
http = require("http"),
app = express(),
toDos = [
// настраиваем список задач копированием
// содержимого из файла todos.OLD.json
];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);
// этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/todos.json", function (req, res) {
res.json(toDos);
});
// командуем Express принять поступающие
// объекты JSON
app.use(express.urlencoded({ extended: true }));
app.post("/todos", function (req, res) {
	// сейчас объект сохраняется в req.body
	var newToDo = req.body;
	console.log(newToDo);
	toDos.push(newToDo);
// простой объект отправлен обратно
	res.json({"message":"Вы размещаетесь на сервере!"});
});