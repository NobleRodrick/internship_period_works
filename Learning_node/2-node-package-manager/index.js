const lodash = require("lodash");

const names = ["Alloh", "Nkefor", "rodrick"];

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);