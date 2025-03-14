const http = require('http');
const fs = require('fs');

// Create a new server
const server = http.createServer((req, res) => {
  // Check the request method and route
  if (req.method === 'GET' && req.url === '/') {
    // Send a response with some data
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } else {
    // Send a 404 response if the request method or route is not recognized
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
