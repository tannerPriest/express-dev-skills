const skills = [
    {skill: "HTML", level: "Proficient"},
    {skill:"CSS" , level: "Proficent"},
    {skill:"Javascript" , level:"Questionable"},
    {skill:"Node JS" , level:"Whats Node JS?"},
    {skill:"Express" , level:"No Comment"}
];

const getSkill = () => {
    return skills;
};

const getOne = (id) => {
    console.log(`SHOWING ${skills[id].skill} PAGE from the  MODEL`)
    return skills[id];
  };
  const create = (skill) => {
    skills.push(skill);
};
const deleteOne = (id) => {
    skills.splice(id, 1);
  };
module.exports = {
    getSkill,
    getOne,
    create,
    deleteOne
};