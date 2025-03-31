const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

//Register a listener
myFirstEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
})

myFirstEmitter.emit("greet", "Alloh Nkefor Rodrick");