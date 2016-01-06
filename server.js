var express = require("express");
var render = require("./script/render").render;
var app = express();

var port = 8080;

app.listen(port, function() {
	console.log("Server iniciado http://localhost:" + port);
});

app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
	render({
		res: res,
		tmp: __dirname + "/template.html",
		ctn: __dirname + "/views/main.html",
		values: {
			title: "Ejemplo de mi render",
			valor: "Soy un valor"
		}
	})
	res.end();
})
