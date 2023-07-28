const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  if (req.url === "/winter") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(q));
  } else if (req.url === "/summer") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Summer</h1>");
  } else {
    if (req.url === "/api") {
      const api = [{ name: "z", gender: "F" }];
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(api));
    }
  }
  res.end(JSON.stringify(q)); //end response
});
const PORT = 5000;
server.listen(PORT, function () {
  console.log("App runing on port " + PORT);
});
