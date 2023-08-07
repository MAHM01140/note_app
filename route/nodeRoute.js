const express = require('express')
const getAllNotes = require('../controler/nodeController')
const router = express.Router()
router.get('/notes',getAllNotes.getAllNotes);
router.post('/notes/save',getAllNotes.saveNotes);
router.put('/notes/update',getAllNotes.updateNotes);
router.delete('/notes/delete',getAllNotes.deleteNotes);

module.exports = router