const express = require("express");
const UsersController = require("../controllers/users");
let router = express.Router();

router.route('/users')
      .get(UsersController.index);

router.route('/users/:id')
      .get(UsersController.show)
      .put(UsersController.update)
      .delete(UsersController.destroy);

router.get('/users/:id/edit',UsersController.edit);

module.exports = router;
