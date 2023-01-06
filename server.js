// File created for creating express server

// Imported Express
const express = require("express"); // It returns a function
const app = express(); // Calling this function gives all methods
const PORT = process.env.PORT || 4000;
const mainRouter = require("./routes/index"); // Importing router from Routes folder

// Using Template engine i.e EJS
app.set("view engine", "ejs"); // setting which view engine we are using

console.log(app.get("view engine")); // ejs
console.log(app.get("views")); // gives path in which views folder

//Using Router -> 1st parameter (route) will be added to all routes of mainRouter
// app.use("/en", mainRouter);
app.use(mainRouter);

// Using global level middleware
// app.use(apiKeyMiddleware);

// It we want to change the views folder
// app.set("views", path.resolve(__dirname) + "/templates");
// console.log(app.get("views")); // now path  with templates folder

// To create server in express
app.listen(PORT, () => console.log(`Express Server Created at PORT ${PORT}`));
