const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    }else if(url === "/about"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("About Page");
    }else if(url === "/contact"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("This is the contact page");
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 Page");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log("server is now listening on port", port);
})