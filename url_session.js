const url = require("url"); //buildin package nodejs
const u = "https://localhost:5000/index.html?name=z&age=10";
const p = url.parse(u, true);
console.log(p);
console.log(p.protocol);
console.log(p.hostname);

// node package manager
// crud operation simple nodejs mongpdb
