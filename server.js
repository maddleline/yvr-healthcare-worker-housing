const express = require("express");
const path = require("path");
const sslRedirect = require("heroku-ssl-redirect");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// enable ssl redirect
app.use(sslRedirect());

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("App is listening on port " + port);
