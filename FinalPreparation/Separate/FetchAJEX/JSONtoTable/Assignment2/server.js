const express=require("express")
const app=express();
const path=require("path")
const fs=require("fs")

app.use(express.static(path.join(__dirname,".")));



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/getData",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(path.join(__dirname,"detail.json"),"utf-8"))
    res.send(JSON.stringify(data));
})









app.listen(3000,()=>{
    console.log("Server is running on port number 3000")
})