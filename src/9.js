// Create a new HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
  // Set the status code of the response
  res.statusCode = 200;

  // Set the Content-Type header of the response
  res.setHeader('Content-Type', 'text/plain');

  // Send a simple message as the response body
  res.end('Hello World!');
});

// Listen on port 3000, or port 80 if port 3000 is already in use
server.listen(process.env.PORT || 3000);
