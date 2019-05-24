const express = require("express");
const AuthController = require("../controllers/auth");
let router = express.Router();

router.route('/')
      .get(AuthController.signin)
      .post(AuthController.login);

router.delete("/logout",AuthController.logout);

module.exports = router;
