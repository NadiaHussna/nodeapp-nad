var express = require('express');
var app = express();

// Constants
const PORT = 80;

app.get("/", function (req, res) {
  res.send("HELOOOOO");
});

app.listen(PORT, function (){
  console.log("App is Listening");
});
