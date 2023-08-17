const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // You can change the port number to any available port you prefer

const server = http.createServer((req, res) => {
  // Get the URL and remove any query parameters
  const url = req.url.split('?')[0];

  // Define the path to the src/ directory
  const publicPath = path.join(__dirname, 'src');

  // Map the requested URL to the corresponding file path
  const filePath = path.join(publicPath, url === '/' ? 'index.html' : url);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, return 404 status
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // Read the file and serve it to the client
      fs.readFile(filePath, (err, content) => {
        if (err) {
          // Error reading the file, return 500 status
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        } else {
          // Determine the content type based on the file extension
          const ext = path.extname(filePath);
          let contentType = 'text/html';
          if (ext === '.css') {
            contentType = 'text/css';
          } else if (ext === '.js') {
            contentType = 'text/javascript';
          }

          // Set the content type in the response header
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    }
  });
});

// Start the server
server.listen(port,() => {
  console.log(`Server running on http://localhost:${port}`);
});