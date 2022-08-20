const notes = require("express").Router();
const fs = require("fs");

notes.get("/", (req, res) => {
  req.sendFile(path.join(__dirname, "/public/notes.html"));
});

notes.get("/", (req, res) => {
  fs.readFile("./db/notes.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      //   note_id: unique id method
    };

    fs.appendFileSync(newNote, "./db/notes.json");
  }
});

module.exports = notes;
