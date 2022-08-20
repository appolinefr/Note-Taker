const express = require("express");
const fs = require("fs");
const path = require("path");
const notes = require("./routes/index.js");

//research how to create unique id using npm package

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/notes", notes);

app.use(express.static("public"));

//The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

//get / should return the  homepage
app.get("/", (req, res) => {
  req.sendFile(path.join(__dirname, "/public/index.html"));
});

//get * should return the homepage
app.get("*", (req, res) => {
  req.sendFile(path.join(__dirname, "/public/index.html"));
});

//listening to port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
