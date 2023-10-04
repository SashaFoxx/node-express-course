const path = require('path')

//const filePath = path.join('/content/', 'subfolder', 'test.text')
//console.log('Result:', filePath)

const absolute = path.resolve(__dirname)
console.log('Result:', absolute)

