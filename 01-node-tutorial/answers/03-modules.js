const names = require("./04-names.js");
const greet = require('./05-utils');
const alt = require('./06-alternative-flavor');
require('./07-mind-grenade')

console.log(names.firstName); // Output: Sasha
console.log(names.lastName); // Output: Foxx

console.log(greet('Sasha')); // Output: Hello, Sasha!

console.log(alt.item1); // Output: Item 1
console.log(alt.item2); // Output: Item 2