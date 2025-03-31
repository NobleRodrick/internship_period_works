const firstModule = require('./first_module.js');

console.log(firstModule.add(10, 20));


try{
    console.log("tyring to divide by zero");
    let result = firstModule.divide(10, 0);
    console.log(result);

}catch(error){
    console.log("caught an error", error.message);
}

//module wrapper

(function(exports, require, module, __filename, __dirname){
    // your moduke code goes here
})