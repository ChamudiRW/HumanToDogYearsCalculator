const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("Your age in dog years is :" + age);
});

app.listen(port);
