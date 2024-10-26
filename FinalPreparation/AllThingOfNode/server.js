const exp = require("constants");
const express=require("express");
const app=express();
const mongodb=require("mongodb");
const client=mongodb.MongoClient;
//const {db,app}=require("./Connection")

const session=require("express-session");
const cookie=require("cookie-parser");
const { send } = require("process");

app.use(express.urlencoded({extended:false}));
// Static medalware
app.use('/', express.static(__dirname + '/Home'));
app.use('/Signup', express.static(__dirname + '/Signup'));
app.use('/Login', express.static(__dirname + '/Login'));
app.use('/Dashboard', express.static(__dirname + '/Dashboard'));

app.use(express.json());

//Session
app.use(cookie());
app.use(session({
    saveUninitialized:true,
    secret:"Ranjeet",
    resave:true
}))


///---------- Connection --------------------------------------------------------------------------------------- 
let db;
client.connect("mongodb+srv://ranjeet09:Ranjeet09@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
.then(database =>{
    db=database.db();
    console.log("Mongo Db Connected")

    app.listen(3000,()=>{
        console.log("Server is running on port number 3000")
    })
})
.catch(err=>{
    console.log(err);
})

/// ----------- Connection End -------------------------------------------------------------------------------

// Methods ----------------------------

function authentication(req,res,next){
   if(req.session.username)
   {
     next();
   }
   else
   {
    res.redirect("/");
   }
}

/// --- -------- Get Method --------------------------------------------------------------------------------
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Home"+"/Home.html");
})

app.get("/Login",(req,res)=>{
    res.sendFile(__dirname+"/Login"+"/Login.html");
})
app.get("/Signup",(req,res)=>{
    res.sendFile(__dirname+"/Signup"+"/SignUp.html")
})

app.get("/Dashboard",authentication,(req,res)=>{
    res.sendFile(__dirname+"/Dashboard"+"/Dashboard.html")
})
// app.get("/style.css",authentication,(req,res)=>{
//     res.sendFile(__dirname+"/Dashboard"+"/style.css")
// })


app.get("/Logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/Login")
})

/// ----------- Get Method End --------------------------------------------------------------------------------


/// ---------- post method -----------------------------------------------------------------------
app.post("/checkCred",async (req,res)=>{
    const {username,password}=req.body;
    const match= await db.collection("users").findOne({username:username,password:password});
    console.log(match)
    if(match)
    {
        req.session.username=username;
        req.session.category=match.category
        res.redirect("/Dashboard");
    }
    else
    {
        res.redirect("/Signup")
    }
    
})

app.post("/SignUp",async (req,res)=>{
    const {username,password,category}=req.body;
    console.log(category)
    const match= await db.collection("users").findOne({username:username,password:password,category:category});
    if(match)
    {
        res.redirect("/Login")
    }
    else
    {
        const addedData=await db.collection("users").insertOne({username:username,password:password,category:category})
        console.log(addedData)
        res.send("User Added Succesfuly");
        
    }
})