const express=require("express");
const app=express();
const path=require("path")
const fs=require("fs")

app.use(express.static("."))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/data",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(path.join(__dirname,"detail.json")));
    res.send(JSON.stringify(data))
})



app.listen(3000,()=>{
    console.log("Server is running on port number 3000")
})