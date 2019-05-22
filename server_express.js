const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.use('/assets', express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'pug');

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
