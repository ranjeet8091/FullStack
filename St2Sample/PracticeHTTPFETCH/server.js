const http = require("http");
const fs = require("fs")
const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.write(fs.readFileSync(__dirname + "/index.html"))
        res.end();
    }
    else if(req.url=="/script.js" && req.method=="GET")
    {
        res.end(fs.readFileSync(__dirname + "/script.js"))
    }

    else if("/BookDetails" && req.method=="POST")
    {
        let incoming="";
        req.on('data',(chunk)=>{
            incoming+=chunk;
        })

        req.on('end',()=>{
            console.log(incoming)
            let inputID=JSON.parse(incoming);
            console.log(`after chunk ${inputID.val}`)
            const Bookdata=JSON.parse(fs.readFileSync(__dirname+"/books.json"));
            const record=Bookdata.filter(ele=>ele.bookid==inputID.val);
            if(record.length>0)
            {
                res.write(JSON.stringify(record[0]));
                res.end();
            }
            else
            {
                res.write(JSON.stringify({msg:"invalid Book id"}))
                res.end()
            }
        })
    }

    else {
        res.end();
    }
})

server.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on port number 3000")
    }
})