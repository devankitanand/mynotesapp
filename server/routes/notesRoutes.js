const express = require('express');
const { protect } = require('../middleware/authmiddleware');
const { getNotes , createNote, getnotesbyid, updatenotes, deletenote} = require('../controllers/notesController');
const router = express.Router();

router.route("/").get(protect ,getNotes);
router.route("/create").post(protect,createNote);
router.route("/:id").get(getnotesbyid).put(protect,updatenotes).delete(protect,deletenote);

module.exports = router;