const express=require("express");
const app=express();
const path=require("path")
const fs=require("fs");
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/data",(req,res)=>{
    const {ID}=req.body;
    console.log(ID)
   const data=JSON.parse(fs.readFileSync(path.join(__dirname,"users.json")));
   const match=data.filter(ele=>ele.ID==ID)
   console.log(match[0]);
     if(match[0])
     {
        res.send(match[0])
     }
     else
     {
        res.send({msg:"Details Not Found"})
     }

})

app.listen(3000,()=>{
    console.log("Server is running on port number 3000")
})