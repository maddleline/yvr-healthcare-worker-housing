// const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "public")));

// enable ssl redirect
// if (process.env.NODE_ENV === "production") {
//   app.use((req, res, next) => {
//     if (req.header("x-forwarded-proto") !== "https")
//       res.redirect(`https://${req.header("host")}${req.url}`);
//     else next();
//   });
// }

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("App is listening on port " + port);
