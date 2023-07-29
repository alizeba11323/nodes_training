// console.log(__dirname);
// console.log(__filename);

const path = require("path");
// C:\Users\sutan\OneDrive\Desktop\courses
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
// C:\Users\sutan\OneDrive\Desktop\courses\path_module.js
console.log(path.extname(__filename));
"folder1", "folder2", "folder3", "data.json";
console.log(path.join("/folder1", "folder2", "folder3", "data.json"));
// relative path
// absolute path  C:\Users\sutan\OneDrive\Desktop\course
console.log(__dirname); //absoute
console.log(path.isAbsolute(__dirname)); //absolute path
const p = path.join(__dirname, "folder1", "folder2", "data.json");
("C:\\Users\\sutan\\OneDrive\\Desktop\\courses\\folder1\\folder2\\data.json");
const parse1 = path.parse(p);
// root of the path
console.log(parse1.root);
// C:\\Users\\sutan\\OneDrive\\Desktop\\courses\\folder1\\folder2\\
console.log(parse1.dir);
// data
console.log(parse1.name);
const p1 = path.join(
  __dirname,
  "folder",
  "folder1",
  "folder2",
  "../../data.json"
);
console.log(p1); //relative path
// /folder/folder1/data.json
console.log(path.resolve("folder1", "/folder2", "//folder3", "../data.json"));
