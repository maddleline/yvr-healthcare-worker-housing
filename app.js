var sslRedirect = require("heroku-ssl-redirect");
var express = require("express");
var app = express();

// enable ssl redirect
app.use(sslRedirect());
