require("dotenv").config();

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/tasks")) {
    res.end("Hello World");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
