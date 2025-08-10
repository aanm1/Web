const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('personal'));  // Serve static files from 'personal' folder

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/personal/index.html");
});

app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});
