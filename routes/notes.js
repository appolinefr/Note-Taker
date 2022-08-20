const notes = require("express").Router();
const fs = require("fs");
const path = require("path");

// GET route should read the notes.json file and return all saved notes
notes.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/notes.json"));
});

// POST Route for a new note
notes.post("/notes", (req, res) => {
  let dbNote = fs.readFileSync("db/notes.json");
  dbNote = JSON.parse(dbNote);
  res.json(dbNote);
  // creating body for note
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    // creating unique id for each note
  };
  // pushing created note to be written in the notes.json file
  dbNote.push(newNote);
  fs.writeFileSync("db/notes.json", JSON.stringify(dbNote));
  res.json(dbNote);
});

module.exports = notes;
