// File created for creating express server

const express = require("express"); // It returns a function
const app = express(); // When we call this function all methods will come
const path = require("path");
const PORT = process.env.PORT || 4000;

//  Get request with parameter (route and callback function)
app.get("/", (req, res) => {
  // In path.resolve right-most parameter is considered {to}
  res.sendFile(path.resolve(__dirname) + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// To create server in express
app.listen(PORT, () => {
  console.log(`Express Server Created at PORT ${PORT}`);
});
