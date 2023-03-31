const express = require('express');
const app = express();

// Constants
const PORT = 80;

app.get("/", function (req, res) {
  res.send("HELOOOOO");
});

app.listen(PORT, function (){
  console.log("Running");
});
