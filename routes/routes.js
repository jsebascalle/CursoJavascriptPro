const express = require("express");
const authRoutes = require("./auth_routes");
const registrationsRoutes = require("./registrations_routes");
const usersRoutes = require("./users_routes");
const tasksRoutes = require("./tasks_routes");

let router = express.Router();

router.use(authRoutes);
router.use(registrationsRoutes);
router.use(usersRoutes);
router.use(tasksRoutes);

module.exports = router;
