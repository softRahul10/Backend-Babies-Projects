const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) throw new Error("Unable to read file contents");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) throw new Error("Unable to read file contents");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (url === "/contact-me") {
    fs.readFile("./contact-me.html", (err, data) => {
      if (err) throw new Error("Unable to read file contents");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      if (err) throw new Error("Unable to read file contents");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Request has been sent");
});
