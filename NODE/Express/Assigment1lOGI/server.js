const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");

// middleWares
app.use(express.static("."));
app.use(express.urlencoded({extended:false}))

app.post("/checkCred",(req,res)=>{
    const {username,password}=req.body;
    console.log(username + password)
    
    let data=fs.readFileSync(path.join(__dirname,"/user.json"));
     data = JSON.parse(data);
    console.log(data)
    
   let count=0;
    data.forEach(ele=>{
        if(ele.username==username && ele.password==password)
        {
           count++;
        }
        
    })
    if(count>0)
    {
        res.sendFile(path.join(__dirname,"/Home.html"))
    }
    else
    {
        res.send("Wrong credential")
    }
})


app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"404.html"));
})
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on port 3000")
    }
})