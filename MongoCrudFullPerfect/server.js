const express =require("express");
const app=express();
const path=require("path")
const mongdb=require("mongodb");
const exp = require("constants");
const client=mongdb.MongoClient;
const ejs=require("ejs");
const object=mongdb.ObjectId

//////////
let db
const url="mongodb+srv://ranjeet09:Tiwari8091@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet"
client.connect(url)
.then(database=>{
    db=database.db("CRUD")
    console.log("connected");
})
//////////////

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine","ejs")

////////////////////////////
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"Home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"Login.html"))
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"Signup.html"))
})
// app.get("/Dashboard",(req,res)=>{
//     res.sendFile(path.join(__dirname,"Dashboard.html"))
// })
///////////////////////////

//Create
app.post("/ADDuser",async (req,res)=>{
    const {username,password}=req.body;
    console.log(username);
    const data= await db.collection("User").find({}).toArray();
    const match= data.filter(ele=>ele.username==username && ele.password==password);
    if(match.length>0)
    {
        res.redirect("/login");
    }
    else{
        const result=await db.collection("User").insertOne({username:username,password:password});
        if(result)
        {
            res.send("User added")
        }
    }

})
///
// Read
app.post("/CrudCheck",async (req,res)=>{
    const {username,password}=req.body;
    console.log(username);
    const data= await db.collection("User").find({}).toArray();
    const match= data.filter(ele=>ele.username==username && ele.password==password);
    if(match.length>0)
    {
        res.render("Dashboard",{"data":data});
    }
    else{
        const result=await db.collection("User").insertOne({username:username,password:password});
        if(result)
        {
            res.redirect("signup")
        }
    }

})
//Delete

    app.post("/deleteUser",async(req,res)=>{
        const UserID=req.body.UserID;
        console.log(UserID)
        const deleted=await db.collection("User").deleteOne({_id:new object(UserID)})
        const data= await db.collection("User").find({}).toArray();
        console.log(deleted)
        if(deleted.deletedCount>0)
        {
            res.render("Dashboard",{"data":data});
        }
    })
//
// update
app.post("/update",async(req,res)=>{
    const UserID=req.body.UserID;
    const data= await db.collection("User").find({}).toArray();
    const match= data.filter(ele=>ele._id==UserID);
    res.render("update",{"data":match})
})

app.post("/updateUser",async(req,res)=>{
    const {username,password}=req.body;
    const upadated=db.collection("User").updateOne({password:password},{$set:{username:username}});
    const data= await db.collection("User").find({}).toArray();
    if(data)
    {
        res.render("Dashboard",{"data":data});
    }


})


app.listen(3000,(err)=>{
    console.log("Server is running on port number 3000")
})