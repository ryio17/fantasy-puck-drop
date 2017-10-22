const express = require("express");

const portNumber = 3000;

let app = express();

app.get("/", (req, res) => {
	res.send("Hello world")
})

app.listen(portNumber, () => {
	console.log("Listening on port " + portNumber);
})