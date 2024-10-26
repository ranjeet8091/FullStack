const express=require("express");
const app=express();
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("I am home Page");
})

app.get("*",(req,res)=>{
    res.send("Invalid")
})

app.listen(3000,()=>{
    console.log("Server is running on port number 3000")
})