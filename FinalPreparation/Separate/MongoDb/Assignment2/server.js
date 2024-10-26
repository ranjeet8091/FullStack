const exp = require("constants");
const express=require("express");
const app=express();
const mongodb=require("mongodb");
const client=mongodb.MongoClient;
const path=require("path")
const session=require("express-session");
const cookie=require("cookie-parser");

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookie());

app.use(session({
    saveUninitialized:true,
    secret:"Ranjeet@123",
    resave:true
}))


// Method
function authentication(req,res,next){
    if(req.session.User)
    {
        next();
    }
    else
    {
        res.redirect("/")
    }

}
///////////////
let db
const uri="mongodb+srv://ranjeet09:Tiwari8091@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet"
client.connect(uri)
.then(database=>{
    db=database.db("Student");
    console.log("connected")
})
///////////////////

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Login.html"))
})
app.get("/dashboard",authentication,(req,res)=>{
    res.sendFile(path.join(__dirname,"dashboard.html"))
})

app.get("/Logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

app.post("/CheckCred", async (req,res)=>{
     const {User,Pass}=req.body;
     const data=await db.collection("users").find({}).toArray();
     const match=data.filter(ele=>ele.User==User && ele.Pass==Pass);
     if(match.length==0)
     {
        req.session.User=User
        res.redirect("/dashboard")
         
     }
     else
     {
        res.sendFile("bhbh")
     }
})





app.listen(3000,()=>{
    console.log("server is ruunning ");
})