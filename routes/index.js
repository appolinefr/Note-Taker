const express = require("express");

const notesRouter = require("./notes.js");

const app = express();

app.use("/api", notesRouter);

const path = require("path");

// GET /notes should return the notes.html file.
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET route should read the notes.json file and return all saved notes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/notes.json"));
});

//get / should return the  homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET * should return the index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
