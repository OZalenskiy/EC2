const http = require('http');
const AWS = require('aws-sdk');
const { appendFile } = require('fs');
const { equal } = require('assert');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url == "/aws-sdk") {
    res.end(`region: ${AWS.config.region}`)
  } else {
    res.end("Home");
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});