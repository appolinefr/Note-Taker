const express = require("express");

//linking notes and home router
const notes = require("./routes/apiRoutes");
const home = require("./routes/homeRoutes");

//listening to heroku port or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//custom routers
app.use(notes);
app.use(home);

//listening to port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
