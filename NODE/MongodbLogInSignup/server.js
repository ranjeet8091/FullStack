const express=require("express")
const app=express();
const mongodb=require("mongodb");
const client=mongodb.MongoClient;
const session=require("express-session");
const cookie=require("cookie-parser");
const cookieParser = require("cookie-parser");
/////////// Medelware//////////

const oneDay=1000*60*60*24
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser())
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:"Ranjeet1233",
    cookie:{
        maxAge:oneDay
    }
}))
app.set("view engine","ejs")

/////////////// Method /////////////////////////////////////////////////////

function authentication(req,res,next)
{
    if(req.session.username)
    {
        next();
    }
    else{
        res.redirect("/login")
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let db;
client.connect("mongodb+srv://ranjeet09:Ranjeet09@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
.then(server=>{
    db=server.db("Sem5");
    console.log("Connected to MongoDb")

    /// port connection
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Server is running on port number 3000")
    }
})
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// GET Routes //////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Home.html")
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.get("/dashboard",authentication,(req,res)=>{
    res.render("Dashboard")
})

app.get("/logout",(req,res)=>{
   req.session.destroy();
   res.redirect("login")
})



// post request///////////////////////////////////////////////////////////////////////////////////////////////

app.post("/addUser", (req,res)=>{
    const {name,age,email,username,password}=req.body
    console.log(name+age) /// Testing

        db.collection("users").findOne({username:username,password:password})
        .then(data=>{
            if(data)
            {
               res.send("User Exist")
               console.log("User exist")
            }
            else{
                db.collection("users").insertOne({"name":name,"age":age,"email":email,"username":username,"password":password})
                .then(()=>{
                  res.send("User addded succesfuly")
                  console.log("user added succesfully")
                })
                .catch(err=>{
                    res.send("Error in adding user")
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })


})

app.post("/profile",async (req,res)=>{
    const {user,pass}=req.body;
    console.log(user+pass) // checking
   const data=await db.collection("users").findOne({username:user,password:pass})
    res.send(JSON.stringify(data))
})


app.post("/CheckCred", (req,res)=>{
    let {username,password}=req.body

        db.collection("users").findOne({username:username,password:password})
        .then(data=>{
            if(data)
            {
               console.log("Credentials Match")
               req.session.username=username;
               res.render("Dashboard",{"data":data})
            }
            else{
               console.log("Credentials Not Match")
               res.redirect("/signup")
            }
        })
        .catch((err)=>{
            console.log(err)
        })

})

app.get("*",(req,res)=>{
    res.send("Invalid url")
})