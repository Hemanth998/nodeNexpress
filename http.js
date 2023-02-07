const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Welcome to our page");
    }
    else if(req.url === "/about") {
        res.end("This is our about page");
    }
    else{
        res.end(
        `<h1>404 not found</h1>
        <a href="/">Go Back to home</a>
        `
    )
    }
})

server.listen(5000);