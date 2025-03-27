const { createNote } = require('../Controllers/NoteController');

const router = require('express').Router();

// To create a note
router.post('/', createNote);




module.exports = router;