const home = require("express").Router();
const path = require("path");

// GET /notes should return the notes.html file.
home.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//GET should return to the homepage
home.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET * should return the index.html file.
home.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = home;
