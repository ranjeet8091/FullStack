const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{

    if(req.url=="/" && req.method=="GET")
    {
        res.write(fs.readFileSync(__dirname+"/index.html"));
        res.end();
    }
   else if(req.url=="/script.js" && req.method=="GET")
        {
            res.write(fs.readFileSync(__dirname+"/script.js"));
            res.end();
        }
    else if(req.url=="/checkCred" && req.method=="POST")
    {
        let datar="";
        req.on('data',(chunk)=>{
            datar+=chunk;
        })

        req.on('end',()=>{
            const newData=JSON.parse(datar);
            console.log(newData)

        const data=JSON.parse(fs.readFileSync(__dirname+"/user.json"));
        const match=  data.filter(ele=>ele.username==newData.user && ele.password==newData.pass);
  
        if(match.length>0)
        {
          res.write(JSON.stringify(match[0]))
          res.end()
        }
        else{
          res.write(JSON.stringify({"msg":"User not exist"}))
          res.end();
  
        }
        })

        
    }


})


server.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on 3000");
    }
})