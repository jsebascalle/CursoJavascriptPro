const express = require("express");
const AuthController = require("../controllers/auth");
let router = express.Router();

router.get('/',AuthController.signin);
router.post('/login',AuthController.login);

module.exports = router;
