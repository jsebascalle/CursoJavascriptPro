//con esto se cvrea un cliente del lado del servidor para poder crear la comunicación 
const io = require("socket.io-client");

let socket = io.connect("http://localhost:3000",{reconnect:true});


socket.on('connect',function(){
  console.log('connectando desde nodejs client!');
});

module.exports = socket;
