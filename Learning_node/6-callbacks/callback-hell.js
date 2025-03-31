const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Error reading file: ", err);
    }else{
        console.log("File content: ", data);
    }

    const modifyFileData = data.toUpperCase();

    fs.writeFile("output.txt", modifyFileData, (err) => {
        if(err){
            console.log("Error writing file: ", err);
        }else{
            console.log("File written successfully");
        }

        console.log("data written to the new file")

        fs.readFile("output.txt", "utf-8", (err, data) => {
            if(err){
                console.log("Error reading file: ", err);
                return;
            }else{
                console.log("File content: ", data);
            }
        })
    })
})