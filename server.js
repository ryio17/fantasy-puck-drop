const express = require("express");
const path = require("path");

const portNumber = 3000;

let app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("index");
})

app.listen(portNumber, () => {
	console.log("Listening on port " + portNumber);
})