const skill = require('../models/skill');

function index(req, res) {
//RENDER GOES TO THE VIEWS FOLDER AND GRABS SKILLS/INDEX
    res.render('skills/index', {
//NOW THAT INDEX.EJS IS OPEN, CALL ON THE const skill THAT HAS THE MODEL, AND CALL THE SKILL FUNCTION THAT RETURNS ALL OF THE SKILLS 
      list: skill.getSkill()
    });
    console.log(`CALLED FROM THE ROUTE FILE "CONTROLLER" skills AND PULLED DATA FROM SKILLS--->`);
  };

const show = (req, res) => {
    res.render('skills/show', {
        list: skill.getSkill(req.params.id),
        // todoNum: parseInt(req.params.id) + 1
    })
};

  module.exports = {
    index,
    show
  };