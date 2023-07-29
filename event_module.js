const event = require("events"); // nodejs
//event listener
const e = new event.EventEmitter();
e.on("CREATE_ORDER", function (data) {
  console.log(data);
});

e.emit("CRAETE_ORDER", { message: "Hello World " });
console.log(e.listeners("CRAETE_ORDER"));
