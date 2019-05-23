const express = require("express");
const RegistrationsController = require("../controllers/registrations");
let router = express.Router();

router.get('/signup',RegistrationsController.register);

module.exports = router;
