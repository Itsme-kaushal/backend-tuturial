

var http = require('http');
const url = require('url');



http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Route for /:name
  if (pathname.startsWith('/') && pathname.length > 1) {
    const name = pathname.slice(1); // Remove the leading '/'
    res.end(`Hello ${name}\n`);
  } else {
    // Default route
    res.end('Hello Kaushal\n');
  }
}).listen(8080);

console.log('Server running at http://localhost:8080/');