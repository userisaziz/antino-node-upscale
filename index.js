const hostname = "127.0.0.1";
const port = 3000;

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Routing
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("This is the About page.");
  } else if (req.url === "/contact") {
    res.end("Contact us at contact@example.com.");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
