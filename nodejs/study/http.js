const http = require('http');
const server = http.createServer();
server.on('request', function (request, response) {
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.write('<h1>Hello World 这个世界!</h1>');
  response.end();
})

server.listen(9000, function () {
  console.log('server start, please visit following website.')
  console.log('http://127.0.0.1:9000')
})