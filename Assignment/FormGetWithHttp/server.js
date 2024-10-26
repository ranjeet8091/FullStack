const http=require("http");
const url=require("url");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const parshed=url.parse(req.url,true);
     const data=parshed.query;

    if(parshed.pathname=="/" && req.method=="GET")
    {
        res.end(fs.readFileSync(__dirname+"/index.html"));
    }
    else if(parshed.pathname=="/login" && req.method=="GET")
    {
        res.end(`User name is ${data.username} and password is ${data.password}`)
    }
    else{
        res.end("Invalid Request")
    }
    
})

server.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("server is running on port number 3000")
    }
})