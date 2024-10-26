const http=require("http");
const fs=require("fs");
const queryString=require("querystring")
const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET")
    {
        res.write(fs.readFileSync(__dirname+"/index.html"));
        res.end();
    }
   else if(req.url=="/login" && req.method=="POST")
        {

             let data="";
             req.on('data',(chunk)=>{
              data+=chunk;
             })

             req.on('end',()=>{
                const NewData=queryString.parse(data)
                console.log(NewData)
                const record=JSON.parse(fs.readFileSync(__dirname+"/user.json"))
               
                const match=record.filter(ele=>ele.username==NewData.username && ele.password==NewData.password)
                if(match.length>0)
                {
                    res.end("User id Matched")
                }
               else{
                res.end("Cred not match")
               }


             })
        }
    
    else
    {
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
        console.log("Server is running on 3000");
    }
})