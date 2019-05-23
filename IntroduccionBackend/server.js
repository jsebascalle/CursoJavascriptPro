const http = require("http");

function responseRequest(req,res ){
  res.end("Hola mundo");
}

let server = http.createServer(responseRequest);

server.listen(3000);
