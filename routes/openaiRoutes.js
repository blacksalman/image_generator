const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();


router.use(express.json());
router.post('/generateimage', generateImage);

module.exports = router;