const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
//REQUIRE METHODS FROM THE CONTROLLER JS FILE ^^^

//GET METHODS FROM CONTROLLER VARIABLE
router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show)

module.exports = router;