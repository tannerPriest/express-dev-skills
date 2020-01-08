const skillModel = require('../models/skill-m');

function index(req, res) {
//RENDER GOES TO THE VIEWS FOLDER AND GRABS SKILLS/INDEX
    res.render('skills-v/index', {
//NOW THAT INDEX.EJS IS OPEN, CALL ON THE const skill THAT HAS THE MODEL, AND CALL THE SKILL FUNCTION THAT RETURNS ALL OF THE SKILLS 
      list: skillModel.getSkill()
    });
  };
const show = (req, res) => {
    res.render('skills-v/show', {
      //CREATING AN OBJECT FROM THE MODEL NAMED HERE 'LIST'. USE METHODS TO CALL FROM OBJECT.getOne is a function from the model
        list: skillModel.getOne(req.params.id),
        // todoNum: parseInt(req.params.id) + 1
    })
};
const newSkill = (req, res) => {
  res.render('skills-v/new')
};
const create = (req, res) => {
  req.body.done = false;
  skillModel.create(req.body);
  res.redirect('/skills');
};
const deleteSkill = (req, res) => {
  skillModel.deleteOne(req.params.id);
  res.redirect('/skills');
};
  module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };