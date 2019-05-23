const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const sqlite3 = require("sqlite3");
const Sequelize = require("sequelize");
const app = express();

//let db = new sqlite3.Database("db-sqlite3");
const sequelize = new Sequelize("db-sqlite3",null,null,{
  // sqlite! now!
 dialect: 'sqlite',
 // the storage engine for sqlite
 // - default ':memory:'
 storage: './db-sqlite3'
});


app.use(bodyParser.urlencoded({extended :true}));
app.use('/assets', express.static(__dirname + '/public',{
  //CACHE PERSONALIZADO pero no recomendado se no se emplea bien
  //etag : false,
  //maxAge: '5h'
}));
app.set('views', './views');
app.set('view engine', 'pug');

/*app.use(cookieSession({
  name :session,
  keys :['sjkasjdkajsdkajskdjaksjdka','asndjhasjdjasgdjaghsjdgajsd']
}));

uso: req.session.visits = 1;

*/
app.get('/',function(req,res){
  // res.send('./views/index.html',{
  //   root : __dirname
  // });
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/saludo',function(req,res){
  res.send(`Hola ${req.query.name}`);
});

app.post('/saludo',function(req,res){
  res.send(`Hola ${req.body.name}`);
});

app.post('/tarea',function(req,res){
  //db.run(`INSERT INTO task(description) values(?)`, req.body.description); //Con esto hace sanitaze para evitar sql injection
  res.send(`Se inserto el registro`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//hace referencia l proceso que se levanta en el servidor-> NO ES NECESARIO CON SEQUELIZE ORM
/*process.on('SIGINT',function(){
  console.log('Adios desde el servidor!');
  db.close(); // DEBE CERRARSE CUANDO FINALICE EL PROCESO
  process.exit();
});*/
