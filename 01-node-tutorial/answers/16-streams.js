const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt',{
    encoding: 'utf8',
    highWaterMark: 200, })
let counter = 0

// Handle the "data" event
readStream.on('data', (chunk) => {
    counter++;
    console.log(`Received chunk: ${chunk.length} bytes`);
});
stream.on('data', (result) => {
console.log(result)
})
stream.on('error', (err) => console.log(err))

// Handle the "end" event
readStream.on('end', () => {
    console.log(`Number of chunks received: ${counter}`);
  });
  
  // Handle the "error" event
  readStream.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });