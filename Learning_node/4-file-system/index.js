const fs = require("fs");
const path = require("path");
const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
//sync way of creating a file
fs.writeFileSync(filePath, "hello world");
console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File content", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line");
console.log("File content added successfully");

//async way of creating a file
const asyncFilePath = path.join(dataFolder, "example-async.txt");

fs.writeFile(asyncFilePath, "Hello async node.js", (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Async File created successfully");
    }

    fs.readFile(asyncFilePath, "utf-8", (err, data) => {
        if(err) throw err;
        console.log("Async File content: ", data);

        fs.appendFile(asyncFilePath, "\nThis is a new line", (err) => {
            if(err) throw err;
            console.log("New line added to async file");

            fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
                if(err) throw err;
                console.log("updated Async File content: ", updatedData);
            });
        });
    });
});