const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path")


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/exployee.json",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(path.join(__dirname,"exployee.json")));
    res.send(data);

})
app.listen(3000,()=>{
    console.log("Server is running on port number 3000")
})