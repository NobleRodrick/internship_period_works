//callbacks are functions that are passed as arguments to other functions

const fs = require("fs");

function person(name, callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
}

function address(){
    console.log("Cameroon");
}

person("Alloh Nkefor Rodrick", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Error reading file: ", err);
    }else{
        console.log("File content: ", data);
    }
})
