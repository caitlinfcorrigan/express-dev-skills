// models/skills.js

const skills = [
  {id: 101, skillName: "HTML", level: "Intermediate"},
  {id: 102, skillName: "CSS", level: "Intermediate"},
  {id: 105, skillName: "JavaScript", level: "Intermediate"},
  {id: 201, skillName: "Node.js", level: "Beginner"},
  {id: 203, skillName: "Express", level: "Beginner"},
  {id: 301, skillName: "Python", level: "Intermediate"}
]
  
    module.exports = {
      getAll,
      getOne,
      create,
      deleteOne
    };

    function deleteOne(id) {
      id = parseInt(id);
      let idx = skills.findIndex(skill => skill.id === id);
      console.log(id)
      skills.splice(idx, 1);
    }

    function create(newSkill) {
      skills.push(newSkill)
    }
  
    function getOne (id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
    }
      
    function getAll() {
      return skills;
    }