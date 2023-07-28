// const fs = require("fs");
// fs.readFile("./index.html", function (err, data) {
//   console.log(data.toString());
// }); // buffer hexadecimal code
// console.log("Hello");

// Read File with fs
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   fs.readFile("./index.html", (err, data) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// });
// const PORT = 5000;
// server.listen(PORT, function () {
//   console.log("App running on port " + PORT);
// });

//write file with fs

// const fs = require("fs");
// fs.writeFile("index.txt", "Hello World Fs Write", function (err) {
//   if (err) console.log(err);
//   console.log("Saved file!");
// });

//Update File content

// const fs = require("fs");
// fs.appendFile("index.txt", "Append File", function (err) {
//   if (err) console.log(err);
//   console.log("File Updated Successfully");
// });

//delete file

// const fs = require("fs");
// fs.unlink("index.txt", function (err) {
//   if (err) console.log(err);
//   console.log("File Deleted!");
// });

const fs = require("fs");
fs.writeFile(
  "index.txt",
  " Hello World Fs Write",
  { flag: "a" },
  function (err) {
    if (err) console.log(err);
    console.log("Saved file!");
  }
);
