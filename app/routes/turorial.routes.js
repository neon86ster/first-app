const { courses } = require("../models/index.js");

module.exports = app => {
  const teachers = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Teacher
  router.post("/", teachers.create);

  // Retrieve all Teacher
  router.get("/", teachers.findAll);

  // Create a new Courese
  router.post("/", courses.create);

  // Retrieve all Course
  router.get("/", courses.findAll);
  

  app.use("/api/tutorials", router);
};
