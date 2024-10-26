const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url")

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const username = parsedUrl.query.username;

    if (parsedUrl.pathname == "/") {
        if (username) {
            res.write(`I am at home page ${username}`);
            res.end();
        }
        else {
            res.write(fs.readFileSync(path.join(__dirname, "form.html")))
            res.end();
        }
    }

    else if (req.url == "/index.html") {
        res.write(fs.readFileSync(path.join(__dirname, "index.html")))
        res.end();
    }
    else if (req.url == "/waether.jpg") {
        res.write(fs.readFileSync(path.join(__dirname, "waether.jpg")))
        res.end();
    }
    else if (req.url == "/style.css") {
        res.write(fs.readFileSync(path.join(__dirname, "style.css")));
        res.end();
    }
    else {
        res.write("Invalid URL")
        res.end();
    }

})

server.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Server is running on port number 3000")
    }
})