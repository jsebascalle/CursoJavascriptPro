const express = require("express");
const paginate = require('express-paginate');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const tasksRoutes = require("./routes/tasks_routes");
const registrationsRoutes = require("./routes/registrations_routes");
const app = express();

app.use('/assets', express.static(__dirname + '/public',{}));
app.set('views', './views');
app.set('view engine', 'pug');
// keep this before all routes that will use pagination
app.use(paginate.middleware(3, 3));
app.use(bodyParser.urlencoded({extended :true}));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
//RUTAS
app.use(tasksRoutes);
app.use(registrationsRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
