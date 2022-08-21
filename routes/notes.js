const notes = require("express").Router();
var uniqid = require("uniqid");
const fs = require("fs");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
  fs.readFile("./db/notes.json").then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
notes.get("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  fs.readFile("./db/notes.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json("No note with that ID");
    });
});

// DELETE Route for a specific note
notes.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  fs.readFile("./db/notes.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      fs.writeFile("./db/notes.json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

// POST Route for a new note
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uniqid(),
    };

    fs.writeFile(newNote, "./db/notes.json");
    res.json(`note added successfully 🚀`);
  } else {
    res.error("Error in adding note");
  }
});

module.exports = notes;
