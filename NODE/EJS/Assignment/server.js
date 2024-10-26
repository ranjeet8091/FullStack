const express=require("express");
const app=express();
const fs=require("fs")
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})


app.post("/login",(req,res)=>{
    const {username,password}=req.body;

    const record=JSON.parse(fs.readFileSync(__dirname+"/user.json"))
    console.log(record)

    const match=record.filter(ele=>ele.username==username && ele.password==password)
    console.log(match)
    if(match.length>0)
    {
        res.render("dasboard",{"name":username})
    }
    else
    {
        res.send("Not valid")
    }
})
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
     console.log("Server is running on page 3000")
    }

})