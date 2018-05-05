import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

var app = express();

app.use(bodyParser(), cookieParser());
app.use(express.static("public"));
// respond with "hello world" when a GET request is made to the homepage
app.get("/api", function(req, res) {
  res.send({ yooy: "yoyo" });
});

// express.static("./public");

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8081, () => console.log("Example app listening on port 3000!"));
