const http = require("http");
const PORT = 3000;
const quotesData = require("./data/quotes.json");

const server = http.createServer((req, res) => {
  // ✅ Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // ✅ Log the request
  console.log("Server received request on:", req.url);

  // ✅ Respond with quotes data
  res.write(JSON.stringify(quotesData));
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
