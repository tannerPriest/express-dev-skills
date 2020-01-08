const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills-c');
//REQUIRE METHODS FROM THE CONTROLLER JS FILE ^^^

//GET METHODS FROM CONTROLLER VARIABLE
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);

module.exports = router;