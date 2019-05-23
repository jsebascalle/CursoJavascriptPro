const express = require("express");
const TasksController = require("../controllers/tasks");
let router = express.Router();

router.route('/tasks')
      .get(TasksController.index)
      .post(TasksController.store);

router.get('/tasks/create',TasksController.create);

router.route('/tasks/:id')
      .get(TasksController.show)
      .put(TasksController.update)
      .delete(TasksController.destroy);

router.get('/tasks/:id/edit',TasksController.edit);

module.exports = router;
