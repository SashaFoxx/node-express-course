const EventEmitter = require("events");
const customEmitter = new EventEmitter();
// Event handler for 'greet' event
customEmitter.on("greet", (name) => {
console.log(`Hello, ${name}!`);
});
// Event handler for 'farewell' event
customEmitter.on("farewell", (name) => {
console.log(`Goodbye, ${name}!`);
});

customEmitter.emit("greet", "Sasha");
customEmitter.emit("greet", "Alice");


customEmitter.emit("farewell", "Leo");
customEmitter.emit("farewell", "Omaro");