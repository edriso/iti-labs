// Part 1
const http = require("http");
const fs = require("fs");

const page = (res, title) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./html/navbar.html", (err, data) => {
    res.write(data);
    res.write(`<h2>${title}</h2>`);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  const url = req.url;

  const pages = {
    "/home": "Homepage",
    "/about": "About Us",
    "/contact": "Contact Us",
  };

  if (pages[url]) {
    page(res, pages[url]);
  } else {
    page(res, "Page not found!");
  }
});

server.listen(3000, () => console.log("Server is up on port 3000"));

// Part 2
const express = require("express");
const app = express();
app.use(express.urlencoded());

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/html/signup.html");
});

app.post("/signup", (req, res) => {
  const { name, password } = req.body;
  if (password.length < 8) {
    res.write("Password is less than 8 chars");
    res.end();
  } else {
    res.send("Welcome on board, " + name + "!");
  }
});

app.listen(3001, () => console.log("App is up and running on port 3001"));
