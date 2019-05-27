const express = require("express");
const paginate = require('express-paginate');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const session = require('express-session');
const routes = require("./routes/routes");
const authUserMiddleware = require("./middlewares/auth_user");
const socketio = require("socket.io")
const app = express();

app.use('/assets', express.static(__dirname + '/public',{}));
app.set('views', './views');
app.set('view engine', 'pug');
// keep this before all routes that will use pagination
app.use(paginate.middleware(10,10));
app.use(bodyParser.urlencoded({extended :true}));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(session({
  secret:"shfjsdhafmkasdfjsdfnasfuaysufyuasyfuansyufyaufynasfj",
  resave:false,
  saveUninitialized:false
}));

app.use('/app',authUserMiddleware);
//  Connect all our routes to our application
app.use('/', routes);

let server = app.listen(process.env.PORT || 3000);
let io = socketio(server);
let sockets= {};
let usersCount = 0;

io.on('connection',function(socket){
  //obtener id usuario loquedao
  let userId = socket.request._query.loggeduser;
  if(userId) sockets[userId] = socket;
  console.log(sockets);
  //notificar tarea nueva
  socket.on('new_task',function(data){
    //solo notifca al usuario que creo la tarea
    if (data.userId) {
      let userSocket = sockets[data.userId];
      if(!userSocket) return ;

      userSocket.emit('new_task',data);
    }
  });
  //cantidad de usuarios
  usersCount++;
  io.emit('count_updated',{count:usersCount});


  //desconectar
  socket.on('disconnect',function(){

    Object.keys(sockets).forEach(userId=>{
      let s = sockets[userId];
      if(s.id == socket.id) sockets[userId] = null;
    });

    usersCount--;
    io.emit('count_updated',{count:usersCount});
  });
});

const ioclient = require("./realtime/client");
