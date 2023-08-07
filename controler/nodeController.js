var generator = require("../util/generator");
var memStorage = require("../util/memory_storage");
var model = require("../model/note-model");
exports.getAllNotes = function (req, res) {
      // var keys = memStorage.getKeys(memStorage.store);
  var values = memStorage.getValue(memStorage.store);

  res.send(JSON.stringify(values));
};

exports.saveNotes = function (req, res) {
  var seqId = generator.generate();
  var titile = req.body.titile;
  var content = req.body.content;
  var createdBy = "Admin";
  var createdOn = new Date();
  if (!titile || !content) {
    return res.status(500).send("Something broke!");
  }
  var Model = model.Note;
  var noteObg = new Model(seqId, titile, content, createdBy, createdOn);
  memStorage.store.setItem(seqId, noteObg);
  res.status(201).send("successfully, note saved...");

  return res.send("save notes");
};

exports.updateNotes = function (req, res) {
  var titile = req.body.titile;
  var content = req.body.content;
  var noteId = req.body.noteId;
  var createdBy = "Admin";
  var createdOn = new Date();
  if (!noteId) {
    return res.status(500).send("Something broke!");
  }
  if (!titile || !content) {
    return res.status(500).send("Something broke!");
  }
  var Model = model.Note;
  var noteObg = new Model(noteId, titile, content, createdBy, createdOn);
  memStorage.store.setItem(noteId, noteObg);
  res.status(201).send("successfully, note updated...");

  res.send("updates notes");
};

exports.deleteNotes = function (req, res) {
  var noteId = req.body.noteId;
  memStorage.store.removeItem(noteId);
  if (!noteId) {
    return res.status(500).send("Something broke!");
  }
  res.status(201).send("successfully, note deleted...");

  res.send("delete notes");
};

//localhost:8080/api/v1/notes/save
