const express = require("express");
const RegistrationsController = require("../controllers/registrations");
let router = express.Router();


router.route('/signup')
        .get(RegistrationsController.create)
        .post(RegistrationsController.store);


module.exports = router;
