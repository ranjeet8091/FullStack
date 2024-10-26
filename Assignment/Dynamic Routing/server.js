const express=require("express");
const app=express();
const fs=require("fs")
app.use(express.static("."))
//const url=require("url")

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/flight/:source/:dest",(req,res)=>{
    const parsed=url.parse(req.url,true);
   
   const source=req.params.source;
    const dest=req.params.dest
  //  res.send("data recieved")
    console.log(source + "--" + dest)

    const data=JSON.parse(fs.readFileSync(__dirname+"/flight.json"));

    const match=data.filter(ele=>ele.source==source && ele.destination==dest);
    if(match.length>0)
    {
        res.send(JSON.stringify(match))
    }
    else
    {
        res.send({msg:"Not match Any data"})
    }
})



app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Server is running on port 3000");
    }
})