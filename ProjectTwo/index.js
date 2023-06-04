const rootDir = require("./util/rootDir");
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact-me.html"));
});
app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
