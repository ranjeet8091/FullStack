const http=require("http");
const url=require("url")
const fs=require("fs")
const path=require("path")
const server=http.createServer((req,res)=>{
    const parsed=url.parse(req.url,true);

    if(parsed.pathname=="/")
    {
        res.writeHead("200",{'content-type':"text/html"});
        res.end(fs.readFileSync(path.join(__dirname,"index.html")))
    }
    else if(parsed.pathname=="/download.jpg")
    {
        res.writeHead("200",{'content-type':"image/jpg"});
        res.end(fs.readFileSync(path.join(__dirname,"download.jpg")))
    }
    else if(parsed.path=="/style.css")
    {
        res.writeHead("200",{'content-type':"text/css"});
        res.end(fs.readFileSync(path.join(__dirname,"style.css")))
    }
    else{
        res.writeHead("500","text/plain")
        res.end("Not found Invalid Request")
    }
})


server.listen(3000,()=>{
    console.log("Server is running on 3000")
})