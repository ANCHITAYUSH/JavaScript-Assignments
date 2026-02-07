// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function writeCallback(){
    console.log("File has been writen");
}

function readCallBack(err, data){
    const cleanData = data.replace(/\s+/g, " ").trim();
    fs.writeFile("neFile.txt", cleanData, writeCallback);
}

fs.readFile("file.txt", "utf-8", readCallBack);