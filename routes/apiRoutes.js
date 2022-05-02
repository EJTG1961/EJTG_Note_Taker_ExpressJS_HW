// Require the router fs and db items needed
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// set up get post delete method as response to database
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    // Read the db.json file and return all saved notes as JSON.
    fs.readFile(
      path.join(__dirname, "../db/db.json"),
      "utf-8",
      function (err, notes) {
        if (err) return res.json(err);
        res.json(JSON.parse(notes));
      }
    );
  });

  // Setup the /api/notes post route
  app.post("/api/notes", function (req, res) {
    // Receives a new note, adds it to db.json, then returns the new note
    fs.readFile(
      path.join(__dirname, "../db/db.json"),
      "utf-8",
      function (err, data) {
        if (err) return res.json(err);
        const notes = JSON.parse(data);
        let newNote = req.body;
        //add uuid to newNote
        newNote.id = uuidv4();
        notes.push(newNote);

      //write to file here
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes));
     }
    );
    updateDb();
    return console.log("Added new note: " + newNote.title);
  });

  // Retrieves a note with specific id
  app.get("/api/notes/:id", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
  });

  // Deletes a note with specific id
  app.delete("/api/notes/:id", function (req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);
  });
};


