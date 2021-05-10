const db = require("../models");
const Teacher = db.teachers;
const Course = db.courses;
const Op = db.Sequelize.Op;


// Create and Save a new teacher
exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a teacher
  const teacher = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    course_id: req.body.course_id
  };

  // Save teacher in the database
  Teacher.create(teacher)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the teacher."
      });
    });
};

// Retrieve all Teacher from the database.
exports.findAll = (req, res) => {
  const first_name = req.query.first_name;
  var condition = first_name ? { first_name: { [Op.iLike]: `%${first_name}%` } } : null;

  Teacher.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Create and Save a new course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.course_title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a course
  const course = {
    course_title: req.body.course_title,
    coure_detail: req.body.coure_detail
    
  };

  // Save course in the database
  Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the teacher."
      });
    });
};

// Retrieve all Teacher from the database.
exports.findAll = (req, res) => {
  const course_title = req.query.course_title;
  var condition = course_title ? { course_title: { [Op.iLike]: `%${course_title}%` } } : null;

  Course.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};