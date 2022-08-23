const notes = require("express").Router();
//package to create unique id for each note
var uniqid = require("uniqid");

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helper/fsUtils");

// GET Route for retrieving all the notes
notes.get("/notes", (req, res) => {
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post("/notes", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uniqid(),
    };
    readAndAppend(newNote, "./db/notes.json");
  }
});



module.exports = notes;
