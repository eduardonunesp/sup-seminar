'use strict'

const http = require('http');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify({
    hello: "Floripa Nerd #10",
    api: 2,
    port: 5002
  }));
});

server.listen(5002, '0.0.0.0');