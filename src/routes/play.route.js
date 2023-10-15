const express = require('express');
const playing = require('../controllers/playing.controller');
const earningXPS = require('../controllers/earningXPS.controller');

const router = express.Router();

router.route("/playing/:username").post(playing)
router.route("earningXPS/:username").post(earningXPS)

module.exports = router;