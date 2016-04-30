'use strict'

const http = require('http');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify({
    hello: "Floripa Nerd #10",
    api: 1,
    port: 5001
  }));
});

server.listen(5001, '0.0.0.0');