const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
    await writeFile("temp.txt","Line 1\nLine 2\nLine 3");
    console.log("File written successfully!");
    } catch (error) {
    console.error("Error writing to file:", error);
    }
}
async function reader() {
    try {
    const data = await readFile("temp.txt", "utf8");
    console.log("File content:\n", data);
    } catch (error) {
    console.error("Error reading file:", error);
    }
}
async function readWrite() {
    await writer();
    await reader();
}
readWrite();

//await writeFile("temp.txt","Line 1");
//await writeFile("temp.txt","Line 2\n");
//var test = await writeFile("temp.txt","Line 3");
//return test // where test would be a promise