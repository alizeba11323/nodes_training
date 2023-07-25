// // const { add } = require("./jsAdd/add");
// // const a = add(1, 2);
// // console.log(add(1, 2));

// const a = 20;
// console.log(a);
// const a = 30;
// console.log(a);
// // require("./index1");
// // require("./index2");
// // (
// //   // module scope

// //   (function () {
// //     console.log("Hello World");
// //   }
// // )();

// require("./index1");

// (function(){
//     const a = 20;

//     console.log(a);

// })()
// require("./index2");
// (function(){
//     const a = 30;

//     console.log(a);

// })()

(function (msg) {
  console.log("Hello world " + msg);
})("Hello");

// const add = (a, b) => {
//   return a + b;
// };

// add(1, 2);

// require,
//   __dirname,
//   __filename,
//   module,
//   exports(function (
//     require,
//     _dirname,
//     __filename,
//     __dirname,
//     module,
//     exports
//   ) {})();

// console.log(__filename);
// console.log(__dirname);

// //module caching

const d = require("./index3");
const i1 = new d(10);
i1.setData(20);
i1.getData();
const i2 = new d(10);
i2.getData();
