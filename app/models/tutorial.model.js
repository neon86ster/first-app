module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    course_id: {
      type: Sequelize.INTEGER
    }
  });

  return Teacher;
};

module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    course_title: {
      type: Sequelize.STRING
    },
    course_detail: {
      type: Sequelize.STRING
    }
  
  });

  return Course;
};
