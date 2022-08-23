const fs = require("fs");
const notes = require("express").Router();
//package to create unique id for each note
var uniqid = require("uniqid");

//Getting all the notes
notes.get("/api/notes", (req, res) => {
  fs.readFile("./db/notes.json", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//Route for posting a new note
notes.post("/api/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(),
  };

  fs.readFile("./db/notes.json", (err, data) => {
    if (err) throw err;

    let savedData = JSON.parse(data);
    savedData.push(newNote);

    fs.writeFile("./db/notes.json", JSON.stringify(savedData), (err) => {
      if (err) throw err;
      res.send("Note added!");
    });
  });
});

module.exports = notes;
