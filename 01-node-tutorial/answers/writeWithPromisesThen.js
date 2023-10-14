const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1")
.then(() => {
    console.log("Line 1 written successfully.");
    return writeFile("temp.txt", "Line 2"); // write line 2
})
.then(() => {
    console.log("Line 2 written successfully.");
    return writeFile("temp.txt", "Line 3"); // write line 3
})
.then(() => {
    console.log("Line 3 written successfully.");
    return readFile("temp.txt", "utf8"); // read the file
})
.then((data) => {
    console.log("File content:\n", data); // log the file content
})
.catch((error) => {
    console.log("An error occurred: ", error);
});