const path = require("path");

console.log("Directory name:", path.dirname(__filename));
console.log("File name:", path.basename(__filename));
console.log("file extension:", path.extname(__filename));
const joinPath = path.join("/user", "documents", "node", "projects");

console.log("Joined Path", joinPath);

const resolvedPath = path.resolve("/user", "documents", "node", "projects");

console.log("Resolved Path", resolvedPath);

const normalizePath = path.normalize("/user/.documents/../node/projects");

console.log("Normalized Path", normalizePath);