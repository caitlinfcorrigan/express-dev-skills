// models/skills.js

const skills = [
  {id: 101, skillName: "HTML", level: "Proficient"},
  {id: 102, skillName: "CSS", level: "Intermediate"},
  {id: 105, skillName: "JavaScript", level: "Intermediate"},
  {id: 201, skillName: "Node.js", level: "Beginner"},
  {id: 203, skillName: "Express", level: "Beginner"},
  {id: 301, skillName: "Pyton", level: "Intermediate"}
]
  
    module.exports = {
      getAll,
      getOne
    };
  
    function getOne (id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
    }
      
    function getAll() {
      return skills;
    }