const http = require("http");
const { url } = require("inspector");
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.write(fs.readFileSync(path.join(__dirname, "index.html")))
        res.end()
    }

    else if (req.url == "/data" && req.method == "POST") {
        let Mdata = "";
        req.on('data', (chunk) => {
            Mdata += chunk;
            req.on('end', () => {
             let parseData=JSON.parse(Mdata)
             console.log(parseData.category)
             if(parseData.category=="user")
             {
              const data=JSON.parse(fs.readFileSync(path.join(__dirname,"users.json"),"utf-8"))
              res.end(JSON.stringify(data))
             }
             else if(parseData.category=="fashion")
             {
                const data=JSON.parse(fs.readFileSync(path.join(__dirname,"Fashion.json"),"utf-8"))
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
             }
            })

        })
    }
    else {
        res.end("invaliid request")
    }
})



server.listen(3000, () => {
    console.log("Server is running on port number 3000")
})