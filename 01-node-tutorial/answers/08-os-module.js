const os = require("os");

//get the hostname of the system
 const hostname = os.hostname()
 console.log(hostname)

//get the type of the system
const osType = os.type()
console.log('Type:', osType)