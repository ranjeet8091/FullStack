const express= require("express");
const app=express();
const fs=require("fs")

app.use(express.static("."))
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/Details",(req,res)=>{
    const {val}=req.body;
    console.log(val)
    const data=JSON.parse(fs.readFileSync(__dirname+"/employee.json","utf-8"));
    console.log(data);

    const record=data.filter((ele)=>ele.empid==val);
    if(record.length>0)
    {
        res.send(record[0]);
    }
    else
    {
        res.send({msg:"Invalid"});
    }

})
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server is running on port number 3000");
    }
})