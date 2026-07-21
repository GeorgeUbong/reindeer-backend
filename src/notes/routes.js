//this is where i will write logic for adding and deletion of notes

const express = require("express");
const router = express.Router();

const {getNotes, addNote} = require('./controller');

router.get('/', getNotes);
router.post('/add', addNote);

module.exports = router;


