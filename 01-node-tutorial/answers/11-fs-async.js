const { writeFile } = require("fs");
console.log("at start");
//line 1
writeFile("./temporary/fileB.txt", "This is line 1\n", { flag: "a" }, (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    console.log("Line 1 written successfully");
   
//line 2
    writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        console.log("Line 2 written successfully");

// line 3
        writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err, result) => {
          console.log("at point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("Line 3 written successfully");
            console.log("at end");
          }
        });
      }
    });
  }
});