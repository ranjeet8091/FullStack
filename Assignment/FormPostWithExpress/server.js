const express=require("express");
const app=express();

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    res.send(`User name is ${username} and password is ${password}`)
})
app.get("*",(req,res)=>{
    res.send("Invalid request")
})




app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on port Number 3000")
    }
})