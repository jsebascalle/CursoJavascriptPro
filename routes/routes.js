const express = require("express");
const authRoutes = require("./auth_routes");
const registrationsRoutes = require("./registrations_routes");
const usersRoutes = require("./users_routes");
const tasksRoutes = require("./tasks_routes");

let router = express.Router();

router.use(authRoutes);
router.use(registrationsRoutes);
router.use('/app',usersRoutes);
router.use('/app',tasksRoutes);


router.get('/app/dashboard',function(req,res){
  res.render('dashboard/index',{user:req.user})
});

module.exports = router;
