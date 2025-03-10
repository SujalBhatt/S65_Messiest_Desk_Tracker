const express = require('express');
const path = require('path');
const db = require("./config/db");

const app = express();

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected"));

app.get('/', (req, res) => {
  const status = db.readyState === 1 ? "Connected" : "Disconnected";
  res.send(`Database status: ${status}`);
});

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.use('/docs.bruno', express.static(path.join(__dirname, 'docs.bruno'))); 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});