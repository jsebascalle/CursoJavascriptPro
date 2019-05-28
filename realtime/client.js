//con esto se cvrea un cliente del lado del servidor para poder crear la comunicación
const io = require("socket.io-client");

let host = "http://localhost:3000";

if(process.env.NODE_ENV && process.env.NODE_ENV == 'production'){
  host = "https://fierce-bastion-13240.herokuapp.com/";
}

let socket = io.connect(host,{reconnect:true});


socket.on('connect',function(){
  console.log('connectando desde nodejs client!');
});

module.exports = socket;
