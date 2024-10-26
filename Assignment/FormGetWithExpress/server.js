const express=require("express");
const app=express();
const url=require("url")

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/login",(req,res)=>{
   const data=url.parse(req.url,true).query;
   res.send(` user name is ${data.username} and Pass is ${data.password}`)
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on port number 3000")
    }
})