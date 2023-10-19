const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

// Create controller function to delete skill
function deleteSkill(req, res){
    console.log("delete skill")
    console.log(req.params.id)
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

// Add the new skill in-mem and display /skills
function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

// Render the new skill page when user clicks link
function newSkill(req, res) {
    res.render('skills/new', {title: "Add a new dev skill"});
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "My Programming Skills"
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: "Additional details about my skill level"
    })
}