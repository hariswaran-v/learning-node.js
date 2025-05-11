const http = require("http");
const internsData = require("./data/interns.json");

const PORT = 3000;

http
  .createServer(function (req, res) {
    console.log("Server created" + PORT);
    res.write(JSON.stringify(internsData));
    res.end();
  })
  .listen(PORT);
